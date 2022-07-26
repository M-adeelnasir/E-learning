import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import Course from '../components/forms/course/Course';
import axios from 'axios'
import { Affix, Skeleton } from 'antd';



const Index = ({ courses }) => {

    const [isSSR, setIsSSR] = useState(true);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setIsSSR(false);
    }, []);


    useEffect(() => {
        if (!courses) {
            setLoading(true)
        }
        else {
            setLoading(false)
        }
    }, [courses])
    return (
        <>
            <div className="cotainer-fluid">

                <Affix offsetTop={0} >
                    <TopNav />
                </Affix>
                <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>E-Learning Management System</h1>

                {!isSSR && <div className='container p-5 pt-3'>
                    <div className="row">

                        {courses && courses.map((course) => (
                            <div className="col-md-4" key={course._id}>
                                {loading ? <Skeleton /> : <Course course={course} />}
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