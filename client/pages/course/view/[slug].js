import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { InfoOutlined } from '@ant-design/icons'
import TopNav from '../../../components/TopNav'
import { currencyFormate } from '../../../utils/helpers'
import ReactPlayer from 'react-player'


const Course = ({ course }) => {

    const { name, description, price, paid, instructor, updatedAt, image } = course
    console.log(course)

    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])


    return (
        <>
            <TopNav />
            {!isSSR &&
                <div className="jumbotron bg-primary grad">
                    <div className="container d-flex justify-content-between text-white">
                        <div className="col-md-6">
                            <div className="d-flex flex-column pb-3 pt-3">
                                {name && <h1 className="mb-2 text-white">{name}</h1>}
                                {description && <p className='mb-2'>{description.substr(0, 100)}...</p>}
                                <p className=''>Created By:  <span className='link'>{instructor.name}</span></p>

                                <p>Last Updated: {new Date(updatedAt).toLocaleDateString()}</p>
                                {paid ? <div>
                                    {currencyFormate({ amount: price, currency: 'usd' })}
                                </div> : "Free"}
                            </div>
                        </div>

                        <div className="col-md-4">
                            {course.lessons && course.lessons[0] ?
                                (<div>
                                    <ReactPlayer
                                        url={course.lessons[0].video.Location}
                                        width="370px"
                                        height="300px"
                                        light={image.Location}
                                    />
                                </div>) : (
                                    <div>{image.Location}</div>
                                )
                            }
                        </div>
                    </div>
                </div>
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