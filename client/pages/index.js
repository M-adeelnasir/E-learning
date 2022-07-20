import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'


const Index = () => {
    const [course, setCourse] = useState([]);


    useEffect(() => {

    }, [])

    return (
        <>
            <TopNav />
            <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>E-Learning Management System</h1>
        </>
    )
}

export default Index