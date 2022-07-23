import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import TopNav from '../../../components/TopNav'
import axios from 'axios';
import { Avatar, Menu, Button } from 'antd';
import ReactPlayer from 'react-player'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'



const MyCourse = () => {

    const [course, setCourse] = useState({ lessons: [] })
    const [collapsed, setCollapsed] = useState(false);
    const [clicked, setClicked] = useState()
    const [hideY, setHideY] = useState("hidden")
    const [showAlert, setShowAlert] = useState(true)
    const [completedLessons, setCompletedLessons] = useState([])


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const router = useRouter()


    useEffect(() => {
        if (router.isReady) {
            loadCourse()
        }
    }, [router.isReady])

    const loadCourse = async () => {
        try {

            const { data } = await axios.get(`/api/v1/user/course/${router.query.slug}`)
            setCourse(data.data)
            console.log(data.data)
        } catch (err) {
            console.log(err)
        }
    }





    useEffect(() => {
        if (course && course.lessons.length > 10) {
            setHideY("scroll")
        }
    }, [hideY, course])


    const handleComplete = async () => {
        try {
            const { data } = await axios.post('/api/v1/lesson/make-as-complete', {
                courseId: course._id,
                lessonId: course.lessons && course.lessons[clicked] && course.lessons[clicked]._id
            })
            setShowAlert(false)
        } catch (err) {
            console.log(err)
        }
    }


    const loadMarkedLesson = async () => {
        try {
            const { data } = await axios.get(`/api/v1/marked-lessons/${course._id}`)
            console.log(data.data)
            setCompletedLessons(data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (course) loadMarkedLesson()

    }, [])

    return (
        <>
            <TopNav />
            <div className='container-fluid d-flex flex'>
                <div style={{
                    maxWidth: 320

                }}>
                    <Button
                        onClick={toggleCollapsed}
                        className="text-primary mb-2 mt-1 btn-block"
                    >
                        {collapsed ? <MenuUnfoldOutlined className='btn-block w-100' /> : <MenuFoldOutlined />}{" "}
                        {!collapsed && "lessons"}
                    </Button>

                    <Menu
                        defaultSelectedKeys={[clicked]}
                        inlineCollapsed={collapsed}
                        mode="inline"
                        style={{ height: '80vh', overflow: 'scroll', overflowX: 'hidden', overflowY: hideY }}
                    >
                        {course && course.lessons && course.lessons.map((lesson, index) => (
                            <Menu.Item
                                onClick={() => setClicked(index)}
                                key={index}
                            ><Avatar>{index + 1}</Avatar> <span style={{ marginLeft: "12px" }}>{lesson.title.substr(0, 30)}</span>
                            </Menu.Item>
                        ))}
                    </Menu>

                </div>
                <div className="col">{clicked != -1 && clicked !== undefined ? (

                    <div>
                        {showAlert && <div className="alert alert-success d-flex justify-content-between m-0 p-2">
                            <p className='mb-0'>{course.lessons && course.lessons[clicked] && course.lessons[clicked].title.substr(0, 30)}</p>
                            <p className='mb-0' onClick={handleComplete} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Mark As Complete</p>
                        </div>}
                        <div>
                            {/* {JSON.stringify(course.lessons && course.lessons[0] && course.lessons[0].video)} */}
                            {course.lessons && course.lessons[clicked] && course.lessons[clicked].video && course.lessons[clicked].video.Location &&
                                <div className=''>
                                    <ReactPlayer
                                        url={course && course.lessons && course.lessons[clicked].video && course.lessons[clicked].video.Location}
                                        controls
                                        width="100%"
                                        height="100%"

                                    />
                                </div>

                            }
                            {course && course.lessons && course.lessons[clicked] && course.lessons[clicked].content}
                        </div>
                    </div>
                ) : ("Let Start! Learning Lesson")}</div>
            </div>
        </>
    )
}

export default MyCourse