import './css/posting.css';

export const Posting = ({ publication, onReadMoreClick }) => {
    return (
        <div className="publicacion-container">
            {publication.map((publicacion, index) => (
                console.log(publicacion.imagePrincipal),
                <div key={index} className="publicacion-card">
                    <center><img src={publicacion.imagePrincipal} alt="Imagen" className='post-image'/></center>
                    <h2>{publicacion.titulo}</h2>
                    <hr />
                    <label>Autor: </label>
                    <p>{publicacion.autor}</p>
                    <button onClick={() => onReadMoreClick(publicacion._id)}>Leer más</button>
                </div>
            ))}
        </div>
    );
};
