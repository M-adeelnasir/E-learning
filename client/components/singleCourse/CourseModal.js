import React from 'react'
import { Modal } from 'antd'
import ReactPlayer from 'react-player'


const CourseModal = ({ course, visible, setVisible, preview, }) => {
    return (
        <>
            <Modal
                title="Video Preview"
                visible={visible}
                onCancel={() => {
                    setVisible(!visible)

                }}
                width={620}
                footer={null}


            >
                <div className="wrapper">
                    <ReactPlayer
                        url={preview}
                        light={course.image.Location}
                        controls={true}
                        playing={visible}
                        width="100%"
                        height="100%"
                    />
                </div>
            </Modal>
        </>
    )
}

export default CourseModal