import { Menu } from 'antd';
import React, { useState, useEffect, useContext } from 'react'
import { AppstoreOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, UserOutlined, DashboardOutlined, CarryOutOutlined, TeamOutlined } from '@ant-design/icons';
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
        <Menu mode='horizontal' selectedKeys={[current]} className="d-block p-2">
            <Menu.Item key='/' onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                <Link href='/'>
                    <a>Courses</a>
                </Link>
            </Menu.Item>
            {user && user !== null && user.role.includes("instructor") ? (<Menu.Item key='/instuctor/a' onClick={(e) => setCurrent(e.key)} icon={<CarryOutOutlined />}>
                <Link href='/instructor/course/create'>
                    <a>Create Course</a>
                </Link>
            </Menu.Item>) : (user && user == null &&
                <Menu.Item key='/instuctor' onClick={(e) => setCurrent(e.key)} icon={< TeamOutlined />}>
                    <Link href='/user/becomeInstructor'>
                        <a>Become Instructor</a>
                    </Link>
                </Menu.Item>
            )}


            {!user && user == null && <Menu.Item style={{ float: "right" }} key='/login' onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined />}>
                <Link href='/login'>
                    <a>Login</a>
                </Link>
            </Menu.Item>}
            {!user && user == null && <Menu.Item style={{ float: "right" }} key='/register' onClick={(e) => setCurrent(e.key)} icon={<UserAddOutlined />}>
                <Link href='/register'>
                    <a>Register</a>
                </Link>
            </Menu.Item>}



            {user && user !== null &&
                <Menu.SubMenu key='/logout'
                    style={{ float: "right" }}
                    title={user && user.name.split(' ')[0]}
                    icon={<UserOutlined

                    />}>
                    {user && user !== null &&
                        <Menu.Item icon={<DashboardOutlined
                        />}
                            key='/dashboard'
                            className="ml-auto">

                            {user && user !== null && user.role.includes("instructor") ? <span>
                                <Link Link href='/instructor'>
                                    <a>Dashboard</a>
                                </Link>
                            </span> : <span>
                                <Link Link href='/user'>
                                    <a>Dashboard</a>
                                </Link>
                            </span>}


                        </Menu.Item>}
                    {user && user !== null && <Menu.Item onClick={handleLogout} icon={<LogoutOutlined />} className="ml-auto">
                        Logout
                    </Menu.Item>}


                </Menu.SubMenu>}






        </Menu>
    )
}

export default TopNav