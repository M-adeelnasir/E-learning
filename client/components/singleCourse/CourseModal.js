import React from 'react'
import { Modal } from 'antd'
import ReactPlayer from 'react-player'


const CourseModal = ({ course, visible, setVisible }) => {
    return (
        <>
            <Modal
                title="Video Preview"
                visible={visible}
                onCancel={() => setVisible(false)}

            >
                <ReactPlayer
                    url={course.lessons[0].video.Location}
                    width="100%"
                    height="250px"
                    light={course.image.Location}
                    footer={null}
                />

            </Modal>
        </>
    )
}

export default CourseModal