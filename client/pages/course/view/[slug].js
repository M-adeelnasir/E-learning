import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopNav from '../../../components/TopNav'
import SingleCourseJumbo from '../../../components/singleCourse/SingleCourseJumbo'
import CourseModal from '../../../components/singleCourse/CourseModal'
import LessonsList from '../../../components/singleCourse/LessonsList'


const Course = ({ course }) => {
    const [visible, setVisible] = useState(false)
    const [preview, setPreview] = useState("")



    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])


    return (
        <>
            <TopNav />
            {!isSSR &&

                <>
                    <div className="pt-3 pb-3">
                        <SingleCourseJumbo course={course} preview={preview} setPreview={setPreview} visible={visible} setVisible={setVisible} />

                        <CourseModal visible={visible} setVisible={setVisible} course={course} preview={preview} />
                    </div>

                    <LessonsList course={course} preview={preview} setPreview={setPreview} visible={visible} setVisible={setVisible} />
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