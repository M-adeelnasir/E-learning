import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import '../public/css/style.css'
import TopNav from '../components/TopNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Myapp = ({ Component, pageProps }) => {
    return (
        <>
            <ToastContainer position='top-center' />
            <TopNav />
            <Component{...pageProps} />
        </>
    )
}

export default Myapp;