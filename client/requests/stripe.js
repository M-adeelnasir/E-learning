import axios from "axios";

export const makeInstructor = async () => {
    return await axios.get('/api/v1/user/make-instructor')
}