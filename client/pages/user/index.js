import React, { useEffect, useState } from 'react'
import UserRoute from '../../components/routes/userRoute'
import TopNav from '../../components/TopNav'
import UserNav from '../../components/nav/UserNav'
import { userCourses } from '../../requests/course'
import { SyncOutlined, PlayCircleOutlined } from '@ant-design/icons'
import Link from 'next/link'


const User = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)



    const loadCourses = async () => {
        setLoading(true)
        try {
            const { data: user } = await userCourses()
            // console.log(user.data)
            setCourses(user.data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }


    useEffect(() => {

        //loads the courses
        loadCourses()
    }, [])

    return (
        <>
            <div className="container-fluid d-flex flex-row p-0">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className='col-md-10'>
                    <TopNav />
                    <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>User Dashboard</h1>

                    {loading ?
                        <div className="d-flex justify-content-center align-items-center text-center h-100">
                            <SyncOutlined
                                spin
                                className="display-1 "
                            />
                        </div>
                        : <div className='container'>

                            {courses && courses.length &&

                                courses.map((course) => (

                                    <div className='d-flex justify-space-around  ' >
                                        <div className='d-flex flex-wrap'>
                                            <img src={course && course.image && course.image.Location} alt="" srcset="" />
                                            <div className='d-flex flex-column mt-2 w-50' style={{ marginLeft: "10px" }}>
                                                <Link href={`/user/course/${course && course.slug}`}><a ><h5 className='text-primary'>{course.name}</h5></a></Link>
                                                <p className='mb-0' >{course.description.substr(0, 100)}</p>
                                                <p className='mb-0'>By: {course && course.instructor && course.instructor.name}</p>
                                                <p className='mb-0'>{course && course.lessons && course.lessons.length} Lessons</p>
                                            </div>
                                        </div>
                                        <h3 className="self-align-center text-center mt-3 text-primary"><Link href={`/user/course/${course && course.slug}`}>
                                            <a >
                                                <PlayCircleOutlined className='' style={{ cursor: "pointer" }} />
                                            </a>
                                        </Link></h3>
                                    </div>

                                ))
                            }

                        </div>}
                </div>

            </div>
        </>

    )
}



export default User