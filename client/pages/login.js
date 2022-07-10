import Link from 'next/Link';
import React, { useState, useContext, useEffect } from 'react';
import { loginUser } from '../requests/user';
import { toast } from 'react-toastify';
import { Context } from '../context';
import { useRouter } from 'next/router'

const login = () => {
    const [email, setEmail] = useState('adnasirkbw@gmail.com');
    const [password, setPassword] = useState('hello123');
    const [loading, setLoading] = useState(false)

    const { state, dispatch } = useContext(Context)
    const { user } = state;
    const router = useRouter();

    useEffect(() => {
        if (user && user !== null) router.push('/')
    }, [user])


    // console.log(state);


    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true)
        try {
            const { data } = await loginUser(email, password)
            const { data: user } = data;

            //save userin state
            dispatch({
                type: 'LOGIN',
                payload: user
            })

            //save user in local storage
            if (typeof window !== 'undefined') {
                window.localStorage.setItem("user", JSON.stringify(user))
            }

            setLoading(false)
            router.push('/')
        } catch (err) {
            toast(err.response.data.msg)
            setLoading(false)
        }
    }

    const form = () => <form onSubmit={handleLogin} >


        <input type="email" className="form-control mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button disabled={!password || !email} className="btn btn-primary m-auto w-100" >{loading ? <div className="spinner-grow spinner-grow-sm text-light " ></div>
            : <span>Login</span>}</button>
    </form>

    return (
        <>
            <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>Login</h1>

            <div className="container mt-3 col-md-4 ">
                <div className="border p-5 ">
                    {form()}
                    <div className='mt-3'>
                        <span>No account? </span>
                        <Link href='/register'>
                            <a >Sign Up</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default login