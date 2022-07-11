import { Menu } from 'antd';
import React, { useState, useEffect, useContext } from 'react'
import { AppstoreOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/Link'
import { useRouter } from 'next/router';
import { logoutUser } from '../requests/user';
import { toast } from 'react-toastify';
import { Context } from '../context';


const TopNav = () => {

    const [current, setCurrent] = useState("/")

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])


    const router = useRouter();
    const { state, dispatch } = useContext(Context);
    const { user } = state

    const handleLogout = async () => {
        try {
            //logout from server
            const data = await logoutUser()
            //remove from local strorage
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('user')
            }
            //logout from context state
            dispatch({
                type: 'LOGOUT'
            })
            router.push('/login')
            toast("logout successful")

        } catch (err) {
            toast("logout error")

        }
    }



    return (
        <Menu mode='horizontal' selectedKeys={[current]} className="d-flex">
            <Menu.Item key='/' onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                <Link href='/'>
                    <a>App</a>
                </Link>
            </Menu.Item>

            {!user && user == null && <Menu.Item key='/login' onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined />}>
                <Link href='/login'>
                    <a>Login</a>
                </Link>
            </Menu.Item>}
            {!user && user == null && <Menu.Item key='/register' onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined />}>
                <Link href='/register'>
                    <a>Register</a>
                </Link>
            </Menu.Item>}


            {user && user !== null && <Menu.SubMenu key='/logout' title={user && user.name.split(' ')[0]} icon={<UserOutlined />}>
                {user && user !== null && <Menu.Item onClick={handleLogout} icon={<LogoutOutlined />} className="ml-auto">
                    Logout
                </Menu.Item>}
                {user && user !== null && <Menu.Item icon={<LogoutOutlined />} key='/dashboard' className="ml-auto">
                    <Link href='/user'>
                        <a>Dashboard</a>
                    </Link>
                </Menu.Item>}
            </Menu.SubMenu>}


        </Menu>
    )
}

export default TopNav