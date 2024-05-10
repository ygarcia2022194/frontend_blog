const imageUrl = 'https://static.vecteezy.com/system/resources/previews/013/125/488/non_2x/default-avatar-profile-icon-social-media-user-sign-symbol-vector.jpg'

const PostAvatar = ({url}) => {
    return(
        <div className="">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const ChannelCard = ({
    titulo,
    id,
    categoria,
    image,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        <div className="" onClick={handleNavigate}>
            <PostAvatar url={image}/>
            <span className="">{titulo}</span>
            <span className="">{categoria}</span>
        </div>
    )
}