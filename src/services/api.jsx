import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8080/blogWorking/v1",
    timeout: 5000
})

export const getPosting = async ()=>{
    try {
        return await apiClient.get('/posting')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getPostingDetails = async ({id})=>{
    try {
        return await apiClient.get(`/posting/${id}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}