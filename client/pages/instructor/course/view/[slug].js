import React, { useEffect, useState } from 'react'
import { Avatar, Tooltip, Button, Modal, List } from 'antd'
import { EditOutlined, CheckOutlined, UploadOutlined, CloseOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import { getCourse } from '../../../../requests/course'
import UserNav from '../../../../components/nav/UserNav'
import TopNav from '../../../../components/TopNav'
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import AddLesson from '../../../../components/forms/course/AddLesson'
import axios from 'axios'
import { toast } from 'react-toastify'
import { addLesson, courseUnpublish, coursePublish } from '../../../../requests/course'

const { Item } = List

const Course = () => {
    const [course, setCourse] = useState({})
    const [ok, setOk] = useState(false)
    const [isVisible, setIsvisible] = useState(false)
    const [values, setValues] = useState({
        title: "",
        content: "",
        video: {},
        uploading: false,
    })

    const { video, title, content } = values

    const [videoUploadText, setVideoUploadText] = useState("Upload Video")
    const [progress, setProgress] = useState(0)

    const [studentCount, setStudentCount] = useState(0)

    const router = useRouter()

    const readCourse = async (slug) => {
        try {
            const { data } = await getCourse(slug)
            console.log(data.data);
            setCourse(data.data)
            setOk(true)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log(router.isReady);

    }, [router.isReady])


    useEffect(() => {
        if (router.isReady) {
            const slug = router.query.slug
            readCourse(slug)
        }
    }, [router.isReady])


    useEffect(() => {

    }, [course, course._id])



    const showModal = async () => {
        setIsvisible(true)
    }
    const handleCancel = () => {
        setIsvisible(false)
    };


    const handleAddLesson = async () => {
        setValues({ ...values, uploading: true })

        console.log(course.instructor._id)

        try {
            console.log(course.instructor._id, course.slug)
            const { data } = await addLesson(video.data, title, content, course.instructor._id, course.slug)
            setValues({ ...values, video: {}, uploading: false, title: "", content: '' })
            setCourse(data.data)
            setVideoUploadText("Upload Video")
            setIsvisible(false)
            setProgress(0)
            toast("Lesson added")
        } catch (err) {
            console.log(err)
            setValues({ ...values, uploading: false })
            toast("Lesson add failed")
        }
    }

    const handleFile = async (e) => {
        try {
            const file = e.target.files[0]
            setVideoUploadText(file.name)
            setValues({ ...values, uploading: true })

            const videoData = new FormData()
            videoData.append("video", file)

            const { data } = await axios.post(`/api/v1/course/video-upload/${course.instructor._id}`, videoData,
                {
                    onUploadProgress: (e) => {
                        setProgress(Math.round((100 * e.loaded) / e.total))

                    }
                }
            )
            console.log(data);
            setValues({ ...values, video: data, uploading: false })

        } catch (err) {
            console.log(err);
            setValues({ ...values, uploading: false })
        }
    }

    const handleRemove = async () => {
        try {
            setProgress(0)
            setValues({ ...values, uploading: true })

            const { data } = await axios.post(`/api/v1/course/video-remove/${course.instructor._id}`, { video: video.data })
            console.log(data);

            setValues({ ...values, uploading: false, video: {} })
            setVideoUploadText("Upload another video")

        } catch (err) {
            console.log(err);
            toast("Video remove failed")
            setValues({ ...values, uploading: false, })

        }
    }

    const handleUnpublish = async () => {
        try {
            const { data } = await courseUnpublish(course._id)
            setCourse(data.data)
            toast("Course Unublished")
        } catch (err) {
            toast("Course Unublished Failed")

        }
    }

    const handlePublish = async () => {

        try {
            console.log(course._id)

            const { data } = await coursePublish(course._id)
            setCourse(data.data)
            console.log(data.data)
            toast("Course published")
        } catch (err) {
            toast("Course published Failed")

        }
    }


    const loadStudentCount = async (courseId) => {
        try {
            const { data } = await axios.post('/api/v1/instructor/course/enrolled-students', { courseId })
            setStudentCount(data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        course && loadStudentCount(course._id)
    }, [course])

    return (
        <InstructorRoute>
            <div className="container-fluid d-flex flex-row p-0 ">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className='col-md-10'>
                    <TopNav />



                    {ok && course !== null && <div className="container d-flex flex-column w-100">
                        <div className=" justify-content-between d-flex mb-0">
                            <div className='d-flex m-4'>
                                <div>
                                    <Avatar className='' shape='round' size={120} src={course.image && course.image.Location} />

                                </div>
                                <div className='d-flex flex-column mt-3' style={{ marginLeft: "15px" }}>
                                    <h5 className='mb-0'>{course.name}</h5>
                                    <p className='mb-0'>{course && course.lessons && course.lessons.length} Lessons</p>
                                </div>


                            </div>
                            <div className='m-4 d-flex'>

                                <Tooltip className='text-info m-2' placement="top" title={`${studentCount} Enrolled`}>
                                    <Button ><UsergroupAddOutlined /></Button>
                                </Tooltip>
                                <Tooltip className='text-info m-2' placement="top" title="Edit">
                                    <Button onClick={() => router.push(`/instructor/course/edit/${course.slug}`)}><EditOutlined /></Button>
                                </Tooltip>

                                {course && course.lessons.length < 5 ?
                                    (<span className='text-danger text-center m-2' style={{ marginLeft: '5px' }}>Atleast 5 lessons required to publish the course</span>) :
                                    course.published ? <Tooltip className='text-danger m-2' placement="top"
                                        title="Unpublish">
                                        <Button onClick={(e) => handleUnpublish(course._id)} ><CloseOutlined /></Button>
                                    </Tooltip> :
                                        (<Tooltip className='text-success m-2' placement="top" title="Pblish">
                                            <Button onClick={handlePublish}><CheckOutlined /></Button>
                                        </Tooltip>)
                                }
                            </div>

                        </div>

                        <div className="col-md-10 offset-md-1">
                            <ReactMarkdown children={course.description} />
                        </div>

                        <div className="colalign-self-center w-50 m-auto mt-5 mr-3">
                            <Button
                                onClick={showModal}
                                type="primary"
                                block
                                shape='round '
                                size='large'

                            >
                                <UploadOutlined /> Upload Lesson
                            </Button>
                        </div>

                        <div className='m-3'>
                            <h4 >{course && course.lessons && course.lessons.length} lessons</h4>

                            {/* {
                                course && course.lessons && course.lessons.map((lesson, i) =>
                                    <div className='m-1' key={lesson._id}>
                                        <span >{i + 1}.</span>
                                        <span className="m-3">{lesson.title}</span>
                                    </div>)
                            } */}

                            <List
                                dataSource={course && course.lessons}
                                renderItem={(item, index) => (
                                    <Item>
                                        <Item.Meta
                                            avatar={<Avatar>{index + 1}</Avatar>}
                                            title={item.title}
                                        >

                                        </Item.Meta>

                                    </Item>
                                )}
                            >

                            </List>

                        </div>

                        <Modal
                            visible={isVisible}
                            onCancel={handleCancel}
                            title="Upload Lesson"
                            centered
                            footer={null}
                            width={700}
                        >

                            <AddLesson values={values} setValues={setValues} handleAddLesson={handleAddLesson} handleFile={handleFile} videoUploadText={videoUploadText} progress={progress} handleRemove={handleRemove} />
                        </Modal>


                    </div>}


                </div>
            </div>

        </InstructorRoute >
    )
}

export default Course