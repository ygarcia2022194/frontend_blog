import { getPosting } from "../../services/api";
import { usePostingDetails } from "../../shared/hooks/usePostingDetails";

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/013/125/488/non_2x/default-avatar-profile-icon-social-media-user-sign-symbol-vector.jpg'

const PostAvatar = ({url}) => {
    return(
        <div className="">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}
export const PostingDescription = ({
    titulo,
    categoria,
    texto,
    image
}) =>{
    return(
        <div className="channel-description-container">
            <PostAvatar url={image}/>
            <span className="channel-description-title">
                {titulo}
            </span>
            <span className="channel-description-title">{categoria}</span>
            <div className="channel-description-box">
                <span className="channel-description">{texto}</span>
            </div>
        </div>
    )
}