import './css/posting.css';

export const Posting = ({ publication }) => {
    return (
        <div className="publicacion-container">
            {publication.map((publicacion, index) => (
                <div key={index} className="publicacion-card">
                    <h2>{publicacion.titulo}</h2>
                    <hr />
                    <p>{publicacion.autor}</p>
                    <p>{publicacion.categoria}</p>
                    <p>{publicacion.texto}</p>
                    <img src={publicacion.image} alt="" />
                    <form >
                        <input type="text" placeholder="Nombre de la persona"></input>
                        <input type="text" placeholder="Comentario"></input>
                        <input type="submit" value="Enviar"></input>
                    </form>
                </div>
            ))}
        </div>
    );
};
