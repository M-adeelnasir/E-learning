import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { resetPassword } from '../../../../requests/user';
import { toast } from 'react-toastify'


const ResetPassdword = () => {
    const [token, setToken] = useState('')
    const [name, setName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showhide, setShowhide] = useState(false)
    const [success, setSuccess] = useState(false)


    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            setToken(router.query.id)
            console.log(router.query.id);
        }
    }, [router.isReady])


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await resetPassword(newPassword, confirmPassword, token)
            toast("Password Reset Successful")
            setLoading(false)
            setSuccess(true)
            setConfirmPassword("")
            setNewPassword("")

        } catch (err) {
            setLoading(false)
            // console.log(err.response);
            setError(err.response.data.msg)
        }
    }



    const form = () => (<form onSubmit={handleLogin} >

        <input type={showhide ? "text" : "password"} className="form-control mb-4" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type={showhide ? "text" : "password"} className="form-control mb-2" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => setShowhide(!showhide)} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Show Password
            </label>
        </div>
        {error && <div className="text-danger mt-0 mb-2" >{error}</div>}

        <button disabled={!confirmPassword || !newPassword} className="btn btn-primary m-auto w-100" type="submit">{loading ? <div className="spinner-border spinner-border-sm" > </div> : <span>Reset Password</span>}</button>

    </form>)

    return (
        <>
            <div className="container col-md-4 mt-5">
                <h3 className='text-info'>Reset Your Password</h3>
                {form()}
                {success && <div className='mt-3' style={{ textDecoration: 'underline' }}>
                    <Link href='/login'>
                        <a >Login Now</a>
                    </Link>
                </div>}
            </div>
        </>
    )
}

export default ResetPassdword