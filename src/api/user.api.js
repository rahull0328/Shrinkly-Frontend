import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (password, email) => {
    const {data} = await axiosInstance.post("/auth/login", {email, password})
    return data
}

export const registerUser = async (name, password, email) => {
    const {data} = await axiosInstance.post("/auth/register", {name, email, password})
    return data
}

export const logoutUser = async (password, email) => {
    const {data} = await axiosInstance.post("/auth/logout")
    return data
}