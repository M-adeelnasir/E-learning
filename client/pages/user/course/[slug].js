import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import TopNav from '../../../components/TopNav'
import axios from 'axios';

const MyCourse = () => {

    const [course, setCourse] = useState({})

    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            loadCourse()

        }
    }, [router.isReady])


    const loadCourse = async () => {
        try {
            const { data } = await axios.get(`/api/v1/user/course/${router.query.slug}`)
            console.log(data)
            setCourse(data.data)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <TopNav />
            <div>{JSON.stringify(course, null, 4)}</div>
        </>
    )
}

export default MyCourse