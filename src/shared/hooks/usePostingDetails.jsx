import { useState } from "react";
import {toast} from "react-hot-toast"
import {getPostingDetails as getPostingDetailsRequest} from '../../services';

export const usePostingDetails = () =>{
    const [postingDetails, setPostingDetails] = useState();

    const getPostingDetails = async (id) =>{
        const responseData = await getPostingDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la informacion'
            )
        }

        setPostingDetails(responseData)
    }

    return{
        postingDetails,
        getPostingDetails
    }
}
