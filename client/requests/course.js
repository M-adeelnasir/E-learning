import axios from "axios";

export const uploadImage = async (image) => {
    return await axios.post('/api/v1/image-upload', { image })
}

export const removeImage = async (image) => {
    return await axios.post('/api/v1/remove/course-image', { image })
}

export const addCourse = async (state, image) => {
    return await axios.post('/api/v1/course/create', {
        ...state,
        image
    })
}