import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import TopNav from '../../../components/TopNav'
import axios from 'axios';
import { Avatar, Menu } from 'antd';



const MyCourse = () => {

    const [course, setCourse] = useState({ lessons: [] })
    const [collapsed, setCollapsed] = useState(false);
    const [clicked, setClicked] = useState()
    const [hideY, setHideY] = useState("hidden")


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


    return (
        <>
            <TopNav />
            <div className='container-fluid d-flex'>
                <div style={{
                    width: "300px",
                    marginTop: '10px'

                }}>
                    <Menu
                        defaultSelectedKeys={[clicked]}
                        inlineCollapsed={collapsed}
                        style={{ height: '80vh', overflow: 'scroll', overflowX: 'hidden', overflowY: hideY }}
                    >
                        {course && course.lessons && course.lessons.map((lesson, index) => (
                            <Menu.Item onClick={() => setClicked(index)}><Avatar>{index + 1}</Avatar> {lesson.title.substr(0, 30)}</Menu.Item>
                        ))}
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default MyCourse