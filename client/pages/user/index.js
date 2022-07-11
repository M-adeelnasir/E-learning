import React, { useState, useEffect } from 'react'
import { currentUser } from '../../requests/user'
import { Context } from '../../context'
import { useContext } from 'react'

const index = () => {

    const [hide, setHide] = useState(true)

    useEffect(() => {
        fetchUser()
    }, [])

    const { state: { user } } = useContext(Context)

    const fetchUser = async () => {
        try {
            const { data } = await currentUser()
            setHide(false)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            {!hide && (<h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>{JSON.stringify(user)}</h1>)}
        </>

    )
}

export default index