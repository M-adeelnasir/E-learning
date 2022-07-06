import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import '../public/css/style.css'


const Myapp = ({ Component, pageProps }) => {
    return <Component{...pageProps} />
}

export default Myapp;