export const Tarjeta = ({datos, setMisPersonajes}) => {
    const {name: nombre, image: imagen} = datos
    return <article className='personaje-encontrado' onClick={() => {
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