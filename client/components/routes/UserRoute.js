import React, { useState, useEffect } from 'react'
import { currentUser } from '../../requests/user'
import { useRouter } from 'next/router'
import UserNav from '../nav/UserNav'
import TopNav from '../TopNav'

const UserRoute = ({ children }) => {

    const [ok, setOk] = useState(false)
    const router = useRouter()



    const getUser = async () => {
        try {
            const { data } = await currentUser()
            const { success } = data
            console.log(success);
            console.log(success);
            if (success) return setOk(true)

        } catch (err) {
            console.log(err);
            setOk(false)
            router.push('/login')
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>

            {!ok && (<>{children}</>)}

        </>
    )
}

export default UserRoute