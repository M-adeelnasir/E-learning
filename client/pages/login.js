import Link from 'next/Link';
import React, { useState } from 'react';
import { loginUser } from '../requests/user';
import { toast } from 'react-toastify';

const login = () => {
    const [email, setEmail] = useState('adnasirkbw@gmail.com');
    const [password, setPassword] = useState('hello123');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(email, password)
            const { data: user } = data;
            console.log(user);
            toast("Logged In")
        } catch (err) {
            toast(err.response.data.msg)
        }
    }

    const form = () => <form onSubmit={handleLogin} >


        <input type="email" className="form-control mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button disabled={!password || !email} className="btn btn-primary m-auto w-100" >Login</button>
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