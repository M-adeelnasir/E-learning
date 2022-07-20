import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import { allCourses } from '../requests/course';
import Course from '../components/forms/course/Course';
import axios from 'axios'


const Index = ({ courses }) => {




    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);


    // const [courses, setCourses] = useState([]);
    // const loadCourses = async () => {
    //     try {
    //         const { data } = await allCourses()
    //         setCourses(data.data)
    //     } catch (err) {
    //         console.log(err)

    //     }
    // }
    // useEffect(() => {
    //     loadCourses()
    // }, [])




    return (
        <>
            <div className="cotainer-fluid">
                <TopNav />
                <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>E-Learning Management System</h1>

                {!isSSR && <div className='container-fluid p-5 pt-3'>
                    <div className="row">

                        {courses && courses.map((course) => (
                            <div className="col-md-3" key={course._id}>
                                <Course course={course} />
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get(`${process.env.API}/courses`)
    return {
        props: {
            courses: data.data
        }
    }
}

export default Index