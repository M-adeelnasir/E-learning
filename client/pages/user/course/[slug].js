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
                <div className="col">{clicked !== -1 ? (
                    <div>Hello</div>
                ) : ("Let Start! Learning Lesson")}</div>
            </div>
        </>
    )
}

export default MyCourse