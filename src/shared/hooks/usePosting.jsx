import { useState } from "react";
import toast from "react-hot-toast";
import { getPosting as getPostingRequest } from "../../services/api";

export const usePosting = () =>{
    const [posting , setPosting] = useState([]);

    const getPosting = async () =>{
        try {
            const postingData = await getPostingRequest()
            if(postingData.error){
                toast.error(
                    postingData.e.response.data || "Error al obtener las tareas"
                );
                return;
            }
            setPosting(postingData.data);
            return postingData.data;
        } catch (error) {
            console.error("Error al obtener el post:", error)
            toast.error("Error al obtener los post");
        }
    }

    return{
        posting,
        getPosting
    }
}