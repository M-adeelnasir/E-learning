import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopNav from '../../../components/TopNav'
import SingleCourseJumbo from '../../../components/singleCourse/SingleCourseJumbo'
import CourseModal from '../../../components/singleCourse/CourseModal'


const Course = ({ course }) => {
    const [visible, setVisible] = useState(false)
    const [preview, setPreview] = useState("")



    const { image } = course


    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])


    return (
        <>
            <TopNav />
            {!isSSR && <>

                <SingleCourseJumbo course={course} preview={preview} setPreview={setPreview} visible={visible} setVisible={setVisible} />

                <CourseModal visible={visible} setVisible={setVisible} course={course} />

            </>




            }
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