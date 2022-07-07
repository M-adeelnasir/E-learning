import axios from 'axios';

export const addUser = async (name, email, password) => {
    return await axios.post('http://localhost:4000/api/v1/user/add', { name, email, password })
}

export const loginUser = async (email, password) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_REQUEST_URL}/user/login`, { email, password })
}   