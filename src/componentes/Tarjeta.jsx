import { Link } from "react-router-dom";

export const Tarjeta = ({datos, setMisPersonajes, enlace = true}) => {
    const {name: nombre, image: imagen, id} = datos;

    const handleClick = (e) => {
        if (setMisPersonajes) {
            setMisPersonajes((estadoActual) => 
                estadoActual.filter((person) => person.name !== nombre)
            );
        }
    };

    const Content = (
        <article className='personaje-encontrado' onClick={handleClick}>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} loading="lazy" />
            {!enlace && <div style={{marginTop: '10px', fontSize: '0.8rem', color: 'var(--db-yellow)'}}>Evolución Alcanzada</div>}
        </article>
    );

    return enlace ? (
        <Link to={`/personajex/${id}`} style={{textDecoration: 'none'}}>
            {Content}
        </Link>
    ) : Content;
}
