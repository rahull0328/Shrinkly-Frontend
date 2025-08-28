import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url) =>{
    const {data} = await axiosInstance.post("/url/create",{url})
    return data.shortUrl
}