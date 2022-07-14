import React, { useState, useEffect } from 'react'
import { checkInstructor } from '../../requests/user'
import { useContext } from 'react'
import { Context } from '../../context';
import { useRouter } from 'next/router'



const InstructorRoute = ({ children }) => {
    const [ok, setOk] = useState(false);
    const router = useRouter()

    const { state: { user } } = useContext(Context)


    const instructor = async () => {
        try {
            const { data } = await checkInstructor();
            setOk(true)
        } catch (err) {
            console.log(err);
            setOk(false)
            router.push('/')
        }
    }

    useEffect(() => {
        instructor()
    }, [])


    return (
        <>
            {ok && <>{children}</>}
        </>
    )
}

export default InstructorRoute