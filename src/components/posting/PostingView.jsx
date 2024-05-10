import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostingDescription } from "./PostingDescription";
import { usePostingDetails } from "../../shared/hooks/usePostingDetails";


export const PostingView = ({getPosting}) =>{
    const {getPostingDetails, postingDetails} = usePostingDetails();

    const {id} = useParams();
    useEffect(()=>{
        getPostingDetails(id)
    }, [])

    return(
        <div className="channel-container">
            <div className="">
                <PostingDescription
                    titulo={postingDetails.data.titulo}
                    categoria={postingDetails.data.categoria}
                    texto={postingDetails.data.texto}
                    image={postingDetails.data.image}
                    getPosting={getPosting}
                />
            </div>
        </div>
    )
}