import React from 'react'
import { Context } from '../../context'
import { useContext } from 'react'
import UserRoute from '../../components/routes/userRoute'
import TopNav from '../../components/TopNav'
import UserNav from '../../components/nav/UserNav'

const Index = () => {

    return (
        <>
            <UserRoute>
                <div className="container-fluid d-flex flex-row p-0">
                    <div className="col-md-2">
                        <UserNav />
                    </div>
                    <div className='col-md-10'>
                        <TopNav />
                        <div>Hello</div>
                    </div>
                </div>
            </UserRoute>
        </>

    )
}

export default Index