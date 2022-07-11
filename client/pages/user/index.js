import React from 'react'
import { Context } from '../../context'
import { useContext } from 'react'
import UserRoute from '../../components/routes/userRoute'

const index = () => {



    const { state: { user } } = useContext(Context)


    return (
        <>
            <UserRoute>
                <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>{JSON.stringify(user)}</h1>
            </UserRoute>
        </>

    )
}

export default index