import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Avatar, List, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import TopNav from '../../../../components/TopNav';
import UserNav from '../../../../components/nav/UserNav';
import Resizer from "react-image-file-resizer";
import { uploadImage } from '../../../../requests/course'
import CreateCourse from '../../../..//components/forms/course/CreateCourse'
import { toast } from 'react-toastify';
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import { removeImage } from '../../../../requests/course';
import { getCourse } from '../../../../requests/course';
import { updateCourse } from '../../../../requests/course';
import { deleteLesson } from '../../../../requests/course';
import UpdateLesson from '../../../../components/forms/course/UpdateLesson';
import axios from 'axios'


const { Item } = List

const Create = () => {

    const [state, setState] = useState({
        name: "",
        loading: false,
        uploading: false,
        paid: true,
        description: "",
        price: "",
        level: "Beginner",
        lessons: [],
    })

    const [preview, setPriview] = useState("")
    const [uploadBtnText, setUploadBtnText] = useState("Upload Image")
    const [image, setImage] = useState({})

    //update lesson modal states
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    const [videoUploadText, setVideoUploadText] = useState("Video.mp4")
    const [current, setCurrent] = useState({})
    const [upload, setUpload] = useState(false)
    const [video, setVideo] = useState({})



    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await updateCourse(state, image)
            console.log(data)
            toast("Course Updated!")
        } catch (err) {
            console.log(err)
            toast("Course Failed To Update")

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
        // console.log(current);
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
            toast("Image upload failed! try later")
        }
    }

    const handleImageReomve = async () => {
        setState({ ...state, loading: true })

        try {
            const res = await removeImage(image)
            setImage({})
            setPriview("")
            await updateCourse(state, image)
            setState({ ...state, loading: false })
            setUploadBtnText("Upload Image")

        } catch (err) {
            setState({ ...state, loading: false })
            console.log(err);
            toast("Image Delete failed")
        }
    }




    const handleDeletLesson = async (lessonId) => {
        try {
            const { data } = await deleteLesson(router.query.slug, lessonId)
            console.log(data.data.lessons);
            setState({ ...state, lessons: data.data.lessons })
            toast("Lesson deleted")
        } catch (err) {
            console.log(err);
            toast("Lesson Delete Failed! try later")
        }
    }







    //drag able list

    const handleDragStart = (e, index) => {
        // console.log("ON DRAG", e, index);
        e.dataTransfer.setData("itemIndex", index)
    }
    const handleDragOver = async (e, index) => {
        // console.log("ON DRAG OVER", e, index);

        const movingItemIndex = e.dataTransfer.getData("itemIndex")
        const targetItemIndex = index

        let allLessons = state.lessons

        let movingItem = allLessons[movingItemIndex]
        allLessons.splice(movingItemIndex, 1)
        allLessons.splice(targetItemIndex, 0, movingItem)

        setState({ ...state, lessons: [...allLessons] })

        await updateCourse(state, image)
        toast("Lesson updated")

    }



    //update lesson modal functions

    const handleModal = async (item) => {
        setVisible(true)
        setCurrent(item)
        setVideo(item.video)
    }

    useEffect(() => {
    }, [video])



    const handleFile = async (e) => {
        try {

            if (video && video.Location) {
                handleRemove()
                toast("Removed Success full")
            }



            const file = e.target.files[0]
            setVideoUploadText(file.name)
            setUpload(true)

            const videoData = new FormData()
            videoData.append("video", file)

            const { data } = await axios.post(`/api/v1/course/video-upload/${state.instructor._id}`, videoData,
                {
                    onUploadProgress: (e) => {
                        setProgress(Math.round((100 * e.loaded) / e.total))

                    }
                }
            )
            console.log(data);
            setCurrent({ ...current, video: data })
            setUpload(false)

        } catch (err) {
            console.log(err);
            setUpload(false)
        }

    }

    const handleRemove = async () => {
        try {
            setProgress(0)
            setUpload(true)

            const { data } = await axios.post(`/api/v1/course/video-remove/${state.instructor._id}`, { video: video })
            console.log(data);

            setVideo({})

            setUpload(false)
            setVideoUploadText("Upload another video")


        } catch (err) {
            console.log(err);
            toast("Video remove failed")
            setUpload(false)

        }
    }



    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`/api/v1/course/lesson-update/${router.query.slug}/${current._id}`, { ...current, video: video })
            console.log(data)
            setVisible(false)
            toast("lesson updated")
            setVideoUploadText("Upload Video")

        } catch (err) {
            console.log(err);
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




                            <h4>{state && state.lessons && state.lessons.length} Lesson</h4>

                            <List className='mt-3 mb-3'
                                onDragOver={(e) => e.preventDefault()}
                                dataSource={state.lessons}
                                renderItem={(item, index) => (
                                    <Item
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, index)}
                                        onDrop={(e) => handleDragOver(e, index)}
                                    >
                                        <Item.Meta
                                            avatar={<Avatar style={{ cursor: 'grabbing' }}>{index + 1}</Avatar>}
                                            title={<span style={{ cursor: 'pointer' }}>{item.title}</span>}
                                            onClick={() => handleModal(item)}
                                        >
                                        </Item.Meta>

                                        <Button
                                            style={{ marginRight: '20px' }}
                                            onClick={() => handleDeletLesson(item._id)}
                                        >
                                            <DeleteOutlined />
                                        </Button>


                                    </Item>
                                )}
                            >
                            </List>

                            <Modal
                                title="Update Lesson"
                                visible={visible}
                                onCancel={() => setVisible(false)}
                                footer={null}
                                width={700}
                            >

                                <UpdateLesson handleUpdate={handleUpdate} setCurrent={setCurrent} current={current}
                                    handleFile={handleFile} videoUploadText={videoUploadText} progress={progress} handleRemove={handleRemove} upload={upload} />
                            </Modal>


                        </div>
                    </div>
                </div>




            </InstructorRoute>

        </>

    )
}

export default Create