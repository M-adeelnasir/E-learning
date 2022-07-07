import axios from 'axios';

export const addUser = async (name, email, password) => {
    return await axios.post('/api/v1/user/add', { name, email, password })
}

export const loginUser = async (email, password) => {
    return await axios.post(`/api/v1/user/login`, { email, password })
}   