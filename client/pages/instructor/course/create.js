import React, { useState } from 'react'
import TopNav from '../../../components/TopNav'
import UserNav from '../../../components/nav/UserNav'


import CreateCourse from '../../../components/forms/course/CreateCourse'


const Create = () => {

    const [state, setState] = useState({
        name: "",
        loading: false,
        uploading: false,
        paid: true,
        description: "",
        price: "",
        imagePreview: ""

    })

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }







    return (
        <>

            <div className="container-fluid d-flex flex-row p-0">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className='col-md-10'>
                    <TopNav />
                    <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>Create Course</h1>
                    <div className="container-fluid ">
                        <h1>Course Details</h1>
                        <CreateCourse setState={setState} state={state} handleChange={handleChange} handleSubmit={handleSubmit} />

                    </div>
                </div>
            </div>

        </>

    )
}

export default Create