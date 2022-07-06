import Link from 'next/Link';
import React, { useState } from 'react';




const register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = (e) => {
        e.prevenetDefault();
    }


    const form = () => <form onSubmit={handleRegister} >

        <input type="text" className="form-control mb-4 " placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" className="form-control mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-primary m-auto w-100" type="submit">Register</button>
    </form>


    return (
        <>
            <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>Register</h1>

            <div className="container mt-3 col-md-4 ">
                <div className="border p-5 ">
                    {form()}
                    <div className='mt-3'>
                        <Link href='/login'>
                            <a >Already have an Account</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default register