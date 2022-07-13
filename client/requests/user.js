import axios from 'axios';

export const addUser = async (name, email, password) => {
    return await axios.post('/api/v1/user/add', { name, email, password })
}

export const loginUser = async (email, password) => {
    return await axios.post(`/api/v1/user/login`, { email, password })
}

export const logoutUser = async () => {
    return await axios.get('/api/v1/user/logout')
}


export const currentUser = async () => {
    return await axios.get('/api/v1//current-user')
}

export const forgotPassword = async (email) => {
    return await axios.post('/api/v1/forgot-password', { email })
}
export const resetPassword = async (confirmPassword, newPassword, resetToken) => {
    return await axios.post(`/api/v1/reset-password/${resetToken}`, { confirmPassword, newPassword })
}

export const checkInstructor = async () => {
    return await axios.get('/api/v1/instructor')
}