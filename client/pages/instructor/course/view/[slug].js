import React, { useEffect, useState } from 'react'
import { Avatar, Tooltip, Button } from 'antd'
import { EditOutlined, CheckOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { getCourse } from '../../../../requests/course'
import UserNav from '../../../../components/nav/UserNav'
import TopNav from '../../../../components/TopNav'
import InstructorRoute from '../../../../components/routes/InstructorRoute'
const Course = () => {
    const [course, setCourse] = useState({})

    const router = useRouter()

    const readCourse = async (slug) => {
        try {
            const { data } = await getCourse(slug)
            console.log(data.data);
            setCourse(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (router.isReady) {
            const slug = router.query.slug
            readCourse(slug)
        }
        console.log(course);
    }, [router.isReady])
    const imgUrl = course.image.Location

    return (
        <InstructorRoute>
            <div className="container-fluid d-flex flex-row p-0 ">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className='col-md-10'>
                    <TopNav />



                    <div className="container d-flex flex-column">
                        <div className=" justify-content-between d-flex mb-0">
                            <div className='d-flex m-4'>
                                <div>
                                    <Avatar className='' shape='round' size={120} src={imgUrl} />

                                </div>
                                <div className='d-flex flex-column mt-3' style={{ marginLeft: "15px" }}>
                                    <h5 className='mb-0'>{course.name}</h5>
                                    <p className='mb-0'>{course.lessons.length} Lessons</p>
                                </div>


                            </div>
                            <div className='m-4'>
                                <Tooltip className='text-success m-3' placement="top" title="Publish">
                                    <Button><CheckOutlined /></Button>
                                </Tooltip>
                                <Tooltip className='text-info' placement="top" title="Edit">
                                    <Button><EditOutlined /></Button>
                                </Tooltip>
                            </div>

                        </div>

                        <div className="col-md-10 offset-md-1">
                            {course.description}
                        </div>
                    </div>


                </div>
            </div>

            {/* <div>{JSON.stringify(imgUrl, null, 4)}</div> */}
        </InstructorRoute>
    )
}

export default Course