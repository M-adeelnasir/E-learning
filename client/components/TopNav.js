import { Menu } from 'antd';
import React, { useState, useEffect } from 'react'
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/Link'

const TopNav = () => {

    const [current, setCurrent] = useState("/")

    useEffect(() => {
        const ty = typeof window === 'undefined'
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    return (
        <Menu mode='horizontal' selectedKeys={[current]}>
            <Menu.Item key='/' onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                <Link href='/'>
                    <a>App</a>
                </Link>
            </Menu.Item>
            <Menu.Item key='/login' onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined />}>
                <Link href='login'>
                    <a>Login</a>
                </Link>
            </Menu.Item>
            <Menu.Item key='/register' onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined />}>
                <Link href='register'>
                    <a>Register</a>
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default TopNav