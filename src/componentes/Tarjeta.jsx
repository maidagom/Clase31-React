import { Link } from "react-router-dom";

export const Tarjeta = ({datos, setMisPersonajes, enlace=true}) => {
    const {name: nombre, image: imagen, id} = datos
    return enlace ?
    <Link to={`/personajex/${id}`}>
        <article className='personaje-encontrado' onClick={() => {
            setMisPersonajes(
                (estadoActual) => {
                    return estadoActual.filter(
                        (person) => person.name !== nombre
                    )
                }
            )
        }}>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
        </article>
    </Link>
    :
    <article className='personaje-encontrado' onClick={() => {
            setMisPersonajes(
                (estadoActual) => {
                    return estadoActual.filter(
                        (person) => person.name !== nombre
                    )
                }
            )
        }}>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
        </article>
}