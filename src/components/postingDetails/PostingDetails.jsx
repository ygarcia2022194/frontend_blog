import React, {useEffect, useState} from "react";
import { getPostingDetails } from "../../services/api";
import './postingDetails.css'
import { Input } from "../Input";
import { addComment } from "../../services/api";

export const PostingDetails = ({postingId}) =>{
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
            postingId,
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
            if(postingId){
                const data = await getPostingDetails(postingId);
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
        console.log('Obteniendo detalles de publicación para id:', postingId)

    }, [postingId]);

    useEffect(()=>{
        const fetchPublicationDetails = async()=>{
            try {
                if(postingId){
                    const data = await getPostingDetails(postingId);
                    setPostingDetails(data);
                }else{
                    console.error('No se encontro el id de la publicacion');
                }
            } catch (error) {
                console.error('Obteniendo detalles de la publicación:', error);
            }
        }
        fetchPublicationDetails();
        console.log('Obteniendo detalles de publicación para id:', postingId)
    }, [postingId]);
    console.log('Detalles de la publicacion:', postingDetails);

    return(
        <div className="publication-details-container">
            {publicationDetails && (
                <div className="publication-details">
                    <div className="publication-details-item">
                        <label>Titulo:</label>
                        <div>{publicationDetails.data.titulo}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Descripción:</label>
                        <div>{publicationDetails.data.descripcion}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Autor:</label>
                        <div>{publicationDetails.data.autor}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Link:</label><br />
                        <a href={publicationDetails.data.link} target="_blank" rel="noopener noreferrer">
                            {publicationDetails.data.link}
                        </a>
                    </div>
                    <div className="publication-details-item">
                        <label>Tecnologías utilizadas:</label>
                        <div>{publicationDetails.data.tecnologiasUtilizadas}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>De que trata:</label>
                        <div>{publicationDetails.data.deQueTrata}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Como funciona:</label>
                        <div>{publicationDetails.data.comoFunciona}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Imágenes:</label>
                        <div className="image-gallery">
                            {publicationDetails.data.imagenes.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index}`} />
                            ))}
                        </div>
                    </div>
                    <div className="publication-details-item">
                        <label>Caracteristicas principales:</label>
                        <div>{publicationDetails.data.caracteristicasPrincipales}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Caracteristicas secundarias:</label>
                        <div>{publicationDetails.data.caracteristicasSecundarias}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Etiquetas:</label>
                        <div>{publicationDetails.data.etiquetas}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Fecha de creacion de la publicación:</label>
                        <div>{publicationDetails.data.fechaCreacion}</div>
                    </div>
                    <hr />
                    <h2>Comentarios</h2>
                    <div className="publication-details-item">
                        <form className="comment-form">
                            <Input
                                field="nombre"
                                label="Nombre persona"
                                value={formState.nombre.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <Input
                                field="comentario"
                                label="Comentario"
                                value={formState.comentario.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <button onClick={handleFormSubmit} className="comment-button">Agregar comentario</button>
                            <br />
                        </form>
                        <div>
                            {publicationDetails && publicationDetails.data && publicationDetails.data.comentarios && publicationDetails.data.comentarios.length > 0 ? (
                                publicationDetails.data.comentarios.map((comentario, index) => (
                                    <div key={index} className="comment-card">
                                        <div>
                                            <label>Nombre persona: {comentario.nombre}</label>
                                        </div>
                                        <div>
                                            <label>Comentario: {comentario.comentario}</label>
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