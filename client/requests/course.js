import axios from "axios";

export const uploadImage = async (image) => {
    return await axios.post('/api/v1/image-upload', { image })
}