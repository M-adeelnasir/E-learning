import React, { useState, useEffect } from 'react'
import { getAllCourses } from '../../../requests/course'
import Link from 'next/link'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        setLoading(true)
        try {
            const { data } = await getAllCourses()

            setCourses(data.data)
            setLoading(false)

        } catch (err) {
            setLoading(true)
        }

    }




    return (
        <>
            <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>Your Courses</h1>
            <div className="container">

                {courses && courses.length > 0 &&
                    <div className="col-md-10">


                        {courses.map((course) => (
                            loading ? <Skeleton /> :
                                <div key={course._id}>
                                    <Link href={`/instructor/course/view/${course.slug}`}>

                                        <a >
                                            <div className='d-flex mt-3' >
                                                <div className=''>
                                                    <img style={{ heigth: "128px", }} src={course.image && course.image.Location} alt="" />

                                                </div>
                                                <div className='d-flex justify-content-between w-100' style={{ marginLeft: '8px' }}>
                                                    <div className="ml-3 " style={{ marginLeft: "5px" }}>
                                                        <h6 >{course.name}</h6>
                                                        <p className='mb-0 text-dark'>{course.description}</p>
                                                        <div className="d-flex">
                                                            <p className='mb-0 text-dark'>{course.lessons.length} Lectures</p>
                                                            <p className='mb-0 text-dark' style={{ marginLeft: "10px" }}>{course.level}</p>
                                                        </div>
                                                        <div >
                                                            {course.lessons.length < 5 ? (
                                                                <p className='text-warning'>Atleast 6 lessons to publish the Course</p>
                                                            ) :
                                                                course.published ? (
                                                                    <p className='text-success'>Your Course is up and live in market place</p>
                                                                ) : (
                                                                    <p className='text-info'>Course is ready! Publish Now</p>
                                                                )}
                                                        </div>
                                                    </div>
                                                    <div className='d-flex flex-column justify-content-between'>
                                                        <h6>${course.price}</h6>

                                                        {course.published && <div className='text-success' style={{ marginLeft: "13px" }}><CheckCircleOutlined /></div>}
                                                    </div>

                                                </div>

                                            </div>

                                        </a>

                                    </Link>
                                    <hr />

                                </div>
                        )
                        )
                        }
                    </div>
                }

            </div>
        </>
    )

}
export default Courses