import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TopNav from '../../../../components/TopNav';
import UserNav from '../../../../components/nav/UserNav';
import Resizer from "react-image-file-resizer";
import { uploadImage } from '../../../../requests/course'
import CreateCourse from '../../../..//components/forms/course/CreateCourse'
import { toast } from 'react-toastify';
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import { removeImage } from '../../../../requests/course';
import { addCourse } from '../../../../requests/course';
import { getCourse } from '../../../../requests/course';

const Create = () => {

    const [state, setState] = useState({
        name: "",
        loading: false,
        uploading: false,
        paid: true,
        description: "",
        price: "",
        level: "Beginner"
    })
    const [preview, setPriview] = useState("")
    const [uploadBtnText, setUploadBtnText] = useState("Upload Image")
    const [image, setImage] = useState({})


    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await addCourse(state, image)
            console.log(data)
            toast("Welcome To New Course!")
        } catch (err) {
            console.log(err)
            toast("Course Failed To Create")

        }

    }


    const courseValues = async (slug) => {
        try {
            const { data } = await getCourse(slug)
            setState(data.data)
            setPriview(data.data.image.Location)
            setImage(data.data.image)

        } catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
        if (router.isReady) {
            courseValues(router.query.slug)
        }
    }, [router.isReady])





    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleImage = async (e) => {
        let file = e.target.files[0]
        setPriview(window.URL.createObjectURL(file));
        setUploadBtnText(file.name)
        setState({ ...state, loading: true })
        try {
            Resizer.imageFileResizer(file, 300, 300, "JPEG", 100, 0, async (uri) => {
                const { data } = await uploadImage(uri)
                setImage(data.data)
                console.log(data);
                setState({ ...state, loading: false })
            })
        } catch (err) {
            setState({ ...state, loading: false })
            console.log(err);
            toast("Image uploaf failed! try later")
        }
    }

    const handleImageReomve = async () => {
        setState({ ...state, loading: true })

        try {
            const res = await removeImage(image)
            setImage({})
            setPriview("")
            setState({ ...state, loading: false })
            setUploadBtnText("Upload Image")

        } catch (err) {
            setState({ ...state, loading: false })
            console.log(err);
            toast("Image Delete failed")
        }
    }


    return (
        <>

            <InstructorRoute>

                <div className="container-fluid d-flex flex-row p-0">
                    <div className="col-md-2">
                        <UserNav />
                    </div>
                    <div className='col-md-10'>
                        <TopNav />
                        <h1 className='jumbotron bg-primary text-center pt-4 pb-4 grad'>Create Course</h1>
                        <div className="container-fluid ">
                            <h1>Course Details</h1>
                            <CreateCourse setState={setState} state={state} handleChange={handleChange} handleSubmit={handleSubmit} handleImage={handleImage} preview={preview} uploadBtnText={uploadBtnText} handleImageReomve={handleImageReomve} edit={true} />
                        </div>
                    </div>
                </div>
            </InstructorRoute>

        </>

    )
}

export default Create