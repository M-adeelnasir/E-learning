import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import { toast } from 'react-toastify'
import { UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import TopNav from '../../components/TopNav'


const BecomeInstructor = () => {
    const [loading, setLoading] = useState(false)
    const { state: { user } } = useContext(Context)


    const handlePayout = () => {
        console.log("clicked")
    }

    return (
        <>
            <div className="container-fluid p-0 ">
                <TopNav />
                <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>Become Instructor</h1>

                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <UserSwitchOutlined className="display-1 mt-2" />
                    <p className='h1 mt-3'>Setup payout to publish courses on</p>
                    <p className='h1'>E-learning</p>
                    <p className="text-warning h6 mt-3  ">E-learning partners with stripe to transfer earnings to bank account</p>
                    <button disabled={!user || user === null || user.role.includes("instructor")} className='btn btn-primary mt-3 btn-block w-50' onClick={handlePayout}> {loading ? (<LoadingOutlined />) : (<span>Payout Setup</span>)}</button>

                    <p className="h6 mt-3">You will be redirected to stripe to complete onboarding process</p>

                </div>
            </div>
        </>
    )
}

export default BecomeInstructor