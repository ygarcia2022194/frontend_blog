import './css/posting.css';

export const Posting = ({ publication }) => {
    return (
        <div className="publicacion-container">
            {publication.map((publicacion, index) => (
                <div key={index} className="publicacion-card">
                    <h2>{publicacion.titulo}</h2>
                    <hr />
                    <label>Autor: </label>
                    <p>{publicacion.autor}</p>
                    <label>Categoria: </label>
                    <p>{publicacion.categoria}</p>
                    <label>Descripcion: </label>
                    <p>{publicacion.texto}</p>
                    <img src={publicacion.image} alt="" className='post-image' />
                    <form className="comment-form">
                        <input type="text" placeholder="Nombre de la persona" className="comment-input"></input>
                        <input type="text" placeholder="Comentario" className="comment-input"></input>
                        <input type="submit" value="Enviar" className="comment-submit"></input>
                    </form>
                </div>
            ))}
        </div>
    );
};
