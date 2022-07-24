import React, { useState } from 'react'
import { Button, Avatar, Tooltip, Progress } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'



const AddLesson = ({ handleAddLesson, setValues, values, handleFile, videoUploadText, progress, handleRemove }) => {
    const { title, video, content, uploading } = values
    return (
        <form onSubmit={handleAddLesson} className="form-control">


            <input
                type="text"
                className="form-control mt-3"
                value={title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                placeholder="Add title"
                autoFocus
                required
            />


            <textarea
                className='form-control mt-3'
                cols="7"
                rows="7"
                value={content}

                placeholder="Description"
                onChange={(e) => setValues({ ...values, content: e.target.value })}

            >
            </textarea>


            <div className="d-flex">
                <label
                    className='mt-3 form-control bg-dark text-white'
                >
                    <input type="file" onChange={handleFile} hidden accept="video/*" />
                    {videoUploadText}
                </label>

                {!uploading && video.data && <div className='p-2 align-self-center'>
                    <Tooltip title="Remove">
                        <CloseCircleOutlined className='text-danger ' onClick={handleRemove} />
                    </Tooltip>
                </div>}
            </div>

            {progress > 0 &&
                (< Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={progress}
                    status="active"
                />)}



            <Button
                block
                className='mt-3 mb-2'
                type='primary'
                shape='round'
                loading={uploading}
                onClick={handleAddLesson}
                disabled={uploading}
            >
                Save Lesson
            </Button>

        </form>
    )
}

export default AddLesson