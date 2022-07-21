import React from 'react'
import { currencyFormate } from '../../utils/helpers'
import ReactPlayer from 'react-player'
import { Button } from 'antd'


const SingleCourseJumbo = ({ course, preview, setPreview, setVisible, visible, user, handleFreeEnrollment, handlePaidEnrollment, enrolled, loading }) => {

    const { name, description, price, paid, instructor, updatedAt, image } = course
    return (
        <div className="jumbotron bg-primary grad">
            <div className="container d-flex justify-content-between text-white pb-5 pt-5">
                <div className="col-md-6 ">
                    <div className="d-flex flex-column">
                        {name && <h1 className="mb-2 text-white">{name}</h1>}
                        {description && <p className='mb-2'>{description.substr(0, 100)}...</p>}
                        <p className=''>Created By:  <span className='link'>{instructor.name}</span></p>

                        <p>Last Updated: {new Date(updatedAt).toLocaleDateString()}</p>
                        {paid ? <div>
                            {currencyFormate({ amount: price, currency: 'usd' })}
                        </div> : "Free"}
                    </div>
                </div>

                <div className="col-md-4 border border-white">
                    {course.lessons && course.lessons[0] ?
                        (<div onClick={() => {
                            setPreview(course.lessons[0].video.Location)
                            setVisible(!visible)
                        }}>
                            <ReactPlayer
                                url={course.lessons[0].video.Location}
                                width="100%"
                                height="250px"
                                light={image.Location}

                            />
                        </div>) : (
                            <div>{image.Location}</div>
                        )
                    }

                    {course &&
                        <Button
                            shape='square'
                            block
                            type='danger'
                            className=" mt-2 mb-2"
                            size='large'
                            loading={loading}
                        >
                            {user ? "Enroll Now" : "Login to Enroll"}
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleCourseJumbo