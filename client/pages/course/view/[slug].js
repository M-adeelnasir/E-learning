import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


const Course = ({ course }) => {

    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])


    return (
        <>
            {!isSSR && <div>Hello</div>}
            {JSON.stringify(course)}
        </>
    )
}


export async function getServerSideProps({ params }) {

    const { data } = await axios.get(`${process.env.API}/course/view/${params.slug}`)
    return {
        props: {
            course: data.data
        }
    }
}

export default Course