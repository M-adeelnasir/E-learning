import Link from 'next/Link';
import React, { useEffect, useState } from 'react';
import { addUser } from '../requests/user';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { Context } from '../context';
import { useRouter } from 'next/router'


const register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state } = useContext(Context)
    const { user } = state

    const router = useRouter()
    useEffect(() => {
        if (user && user !== null) router.push('/')
    }, [user])

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addUser(name, email, password)
            const { data: user } = data
            toast("Registered")
        } catch (err) {
            // console.log(err.response.data.msg);
            toast.error(err.response.data.msg)
        }

    }


    const form = () => <form onSubmit={handleRegister} >

        <input type="text" className="form-control mb-4 " placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" className="form-control mb-4" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button disabled={!name || !password || !email} className="btn btn-primary m-auto w-100" >Register</button>
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