import React, { useState } from 'react'
import { Button } from 'antd'



const AddLesson = ({ handleAddLesson, setValues, values, handleFile, videoUploadText }) => {
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


            <label
                className='mt-3 form-control bg-dark text-white'
            >
                <input type="file" onChange={handleFile} hidden accept="video/*" />
                {videoUploadText}
            </label>


            <Button
                block
                className='mt-3 mb-2'
                type='primary'
                shape='round'
                loading={uploading}
                onClick={handleAddLesson}
            >
                Save Lesson
            </Button>

        </form>
    )
}

export default AddLesson