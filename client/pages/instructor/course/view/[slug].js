import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCourse } from '../../../../requests/course'

const Course = () => {
    const [course, setCourse] = useState({})

    const router = useRouter()

    const readCourse = async (slug) => {
        try {
            const { data } = await getCourse(slug)
            console.log(data.data);
            setCourse(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (router.isReady) {
            const slug = router.query.slug
            readCourse(slug)
        }
    }, [router.isReady])

    return (
        <div>{JSON.stringify(course)}</div>
    )
}

export default Course