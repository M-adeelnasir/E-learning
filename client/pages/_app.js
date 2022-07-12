import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import '../public/css/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';


const Myapp = ({ Component, pageProps }) => {
    return (
        <Provider>
            <ToastContainer position='top-center' />

            <Component{...pageProps} />
        </Provider>
    )
}

export default Myapp;