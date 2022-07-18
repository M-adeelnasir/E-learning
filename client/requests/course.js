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

export const getAllCourses = async () => {
    return await axios.get('/api/v1/instructor/courses')
}
export const getCourse = async (slug) => {
    return await axios.get(`/api/v1/course/${slug}`)
}

export const addLesson = async (video, title, content, slug, instructorId) => {
    return await axios.post(`/api/v1/course/add-lesson/${instructorId}/${slug}`, { video, title, content })
}


export const updateCourse = async (state, image) => {
    return await axios.put(`/api/v1/course/${state.slug}`, { ...state, image })
}

export const deleteLesson = async (slug, lessonId) => {
    return await axios.put(`/api/v1/course/lesson-remove/${slug}/${lessonId}`)
}