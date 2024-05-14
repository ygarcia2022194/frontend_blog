import React, {useEffect, useState} from "react";
import { getPostingDetails } from "../../services/api";
import './postingDetails.css'
import { Input } from "../Input";
import { addComment } from "../../services/api";

export const PostingDetails = ({publicationId}) =>{
    const [postingDetails, setPostingDetails] = useState(null);
    const [formState, setFormState] = useState({
        usuario:{
            value: '',
            isValid: false,
            showError: false
        },
        comment: {
            value: '',
            isValid: false,
            showErro: false
        }
    })

    const handleInputValueChange = (value, field) =>{
        setFormState((prevState) =>({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) =>{
        let isValid = false;
        switch(field){
            case 'usuario':
                isValid = value.length > 0;
                break;
            case 'comment':
                isValid = value.length > 0;
                break;
            default:
                break;
        }
        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = async (event)=>{
        event.preventDefault();
        const response = await addComment(
            publicationId,
            formState.usuario.value,
            formState.comment.value
        )
        setFormState({
            usuario: {value: ""},
            comment: {value: ""}
        })
        fetchPublicationDetails();
    }

    const fetchPublicationDetails = async()=>{
        try {
            if(publicationId){
                const data = await getPostingDetails(publicationId);
                console.log(data)
                setPostingDetails(data)
            }else{
                console.error('No se encontro la publicacion');
            }
        } catch (error) {
            console.error('Error al encontrar la publicacion: ', error)
        }
    }

    useEffect(()=>{
        fetchPublicationDetails();
        console.log('Obteniendo detalles de publicación para id:', publicationId)

    }, [publicationId]);

    useEffect(()=>{
        const fetchPublicationDetails = async()=>{
            try {
                if(publicationId){
                    const data = await getPostingDetails(publicationId);
                    setPostingDetails(data);
                }else{
                    console.error('No se encontro el id de la publicacion');
                }
            } catch (error) {
                console.error('Obteniendo detalles de la publicación:', error);
            }
        }
        fetchPublicationDetails();
        console.log('Obteniendo detalles de publicación para id:', publicationId)
    }, [publicationId]);
    console.log('Detalles de la publicacion:', postingDetails);

    return(
        <div className="publication-details-container">
            {postingDetails && (
                <div className="publication-details">
                    <div className="publication-details-item">
                        <label>Autor:</label>
                        <div>{postingDetails.data.autor}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Titulo:</label>
                        <div>{postingDetails.data.titulo}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Descripción:</label>
                        <div>{postingDetails.data.texto}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Categoria:</label>
                        <div>{postingDetails.data.categoria}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Link:</label><br />
                        <a href={postingDetails.data.link} target="_blank" rel="noopener noreferrer">
                            {postingDetails.data.link}
                        </a>
                    </div>
                    <div className="publication-details-item">
                        <label>Tecnologías utilizadas:</label>
                        <div>{postingDetails.data.tools}</div>
                    </div>
                    <img src={postingDetails.data.imagePrincipal} alt="Imagen" className='post-image'/>
                    <hr />
                    <h2>Comentarios</h2>
                    <div className="publication-details-item">
                        <form className="comment-form">
                            <Input
                                field="usuario"
                                label="Usuario"
                                value={formState.usuario.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <Input
                                field="comentario"
                                label="Comentario"
                                value={formState.comment.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <button onClick={handleFormSubmit} className="comment-button">Agregar comentario</button>
                            <br />
                        </form>
                        <div>
                            {postingDetails && postingDetails.data && postingDetails.data.comentarios && postingDetails.data.comentarios.length > 0 ? (
                                postingDetails.data.comentarios.map((comentario, index) => (
                                    <div key={index} className="comment-card">
                                        <div>
                                            <label>Nombre persona: {comentario.usuario}</label>
                                        </div>
                                        <div>
                                            <label>Comentario: {comentario.comment}</label>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-comments">No hay comentarios</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

/*<div className="publication-details-item">
                        <label>Imágenes:</label>
                        <div className="image-gallery">
                            {postingDetails.data.imagenes.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index}`} />
                            ))}
                        </div>
                    </div>*/