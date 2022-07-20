import React from 'react'
import { List, Avatar } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
const { Item } = List



const LessonsList = ({ course, preview, setPreview, visible, setVisible, }) => {
    const { lessons } = course

    const handlePreview = (e, item) => {
        setPreview(item.video.Location)
        setVisible(true)
    }



    console.log(lessons);
    return (
        <div className='container pt-4 pb-4'>
            <List
                itemLayout='horizontal'
                dataSource={lessons}
                renderItem={(item, index) => (
                    <Item>
                        <Item.Meta
                            avatar={<Avatar>{index + 1}</Avatar>}
                            title={item.free_preview ?
                                <span>{item.title} <span onClick={(e) => handlePreview(e, item)} className='text-primary d-flex ' style={{ cursor: "pointer" }}><CaretRightOutlined className='pt-1' />Preview</span></span> :
                                (item.title)}
                        >
                        </Item.Meta>
                    </Item>
                )}
            />



        </div>
    )
}

export default LessonsList