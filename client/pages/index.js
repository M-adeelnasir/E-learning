import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import { allCourses } from '../requests/course';


const Index = () => {
    const [courses, setCourses] = useState([]);



    const loadCourses = async () => {
        try {
            const { data } = await allCourses()
            setCourses(data.data)
        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        loadCourses()
    }, [])

    return (
        <>
            <div className="cotainer-fluid">
                <TopNav />
                <h1 className='jumbotron bg-primary text-center pt-5 pb-5 grad'>E-Learning Management System</h1>
                <div className='d-flex'>
                    {courses && courses.map((course) => (
                        <div className='col-md-4'>{JSON.stringify(course)}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Index