import { Menu } from 'antd';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/Link'

const TopNav = () => {
    return (
        <Menu mode='horizontal'>
            <Menu.Item icon={<AppstoreOutlined />}>
                <Link href='/'>
                    <a>App</a>
                </Link>
            </Menu.Item>
            <Menu.Item icon={<LoginOutlined />}>
                <Link href='login'>
                    <a>Login</a>
                </Link>
            </Menu.Item>
            <Menu.Item icon={<UserAddOutlined />}>
                <Link href='register'>
                    <a>Register</a>
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default TopNav