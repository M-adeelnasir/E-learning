import Link from 'next/Link';
import React, { useState } from 'react';


const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.prevenetDefault();
    }

    const form = () => <form onSubmit={handleLogin} >


        <input type="email" className="form-control mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-primary m-auto w-100" type="submit">Login</button>
    </form>

    return (
        <>
            <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>Login</h1>

            <div className="container mt-3 col-md-4 ">
                <div className="border p-5 ">
                    {form()}
                    <div className='mt-3'>
                        <span>No account </span>
                        <Link href='/login'>
                            <a >Sign Up</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default login