import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import { toast } from 'react-toastify'
import { UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons'
import TopNav from '../../components/TopNav'
import { makeInstructor } from '../../requests/stripe'


const BecomeInstructor = () => {
    const [loading, setLoading] = useState(false)
    const { state: { user } } = useContext(Context)


    const handlePayout = async () => {
        setLoading(true)
        // try {
        //     const { data } = await makeInstructor()
        //     setLoading(false)
        //     console.log(data);

        //     window.location.href = data
        // } catch (err) {
        //     setLoading(false)
        //     console.log(err);
        // }
        console.log("click 1");
        makeInstructor().then((res) => {
            console.log("click 2");
            setLoading(false)
            console.log(res);
            console.log(res.data);

            // window.location.href = data
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        })
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
                    <button disabled={!user || user === null || user.role.includes("instructor") || loading} className='btn btn-primary mt-3 btn-block w-50' onClick={handlePayout}> {loading ? (<LoadingOutlined />) : (<span>Payout Setup</span>)}</button>

                    <p className="h6 mt-3">You will be redirected to stripe to complete onboarding process</p>

                </div>
            </div>
        </>
    )
}

export default BecomeInstructor