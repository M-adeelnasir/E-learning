import React from 'react'
import UserRoute from '../../components/routes/userRoute'
import TopNav from '../../components/TopNav'
import UserNav from '../../components/nav/UserNav'
import InstructorRoute from '../../components/routes/InstructorRoute'


const User = () => {

    return (
        <>
            <div className="container-fluid d-flex flex-row p-0">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className='col-md-10'>
                    <TopNav />
                    <div>Hello</div>
                </div>
            </div>
        </>

    )
}



export default User