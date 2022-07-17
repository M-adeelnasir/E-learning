import React, { useEffect, useState } from 'react'
import { Avatar, Tooltip, Button, Modal } from 'antd'
import { EditOutlined, CheckOutlined, UploadOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import { getCourse } from '../../../../requests/course'
import UserNav from '../../../../components/nav/UserNav'
import TopNav from '../../../../components/TopNav'
import InstructorRoute from '../../../../components/routes/InstructorRoute'


const Course = () => {
    const [course, setCourse] = useState({})
    const [ok, setOk] = useState(false)
    const [isVisible, setIsvisible] = useState(false)

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





    const showModal = async () => {
        setIsvisible(true)
    }
    const handleCancel = () => {
        setIsvisible(false)
    };





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
                                    <Avatar className='' shape='round' size={120} src={course.image.Location} />

                                </div>
                                <div className='d-flex flex-column mt-3' style={{ marginLeft: "15px" }}>
                                    <h5 className='mb-0'>{course.name}</h5>
                                    <p className='mb-0'>{course.lessons.length} Lessons</p>
                                </div>


                            </div>
                            <div className='m-4'>
                                <Tooltip className='text-success m-3' placement="top" title="Publish">
                                    <Button><CheckOutlined /></Button>
                                </Tooltip>
                                <Tooltip className='text-info' placement="top" title="Edit">
                                    <Button><EditOutlined /></Button>
                                </Tooltip>
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

                        <Modal
                            visible={isVisible}
                            onCancel={handleCancel}
                            title="Upload Lesson"
                            centered
                            footer={null}
                        >


                        </Modal>


                    </div>}


                </div>
            </div>

        </InstructorRoute>
    )
}

export default Course