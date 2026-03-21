import { useEffect, useState } from "react"
import { Menu } from "../componentes/Menu.jsx"

export const blog = () => {
    const [publicaciones, setPublicaciones] = useState({})
    
    useEffect(() => {
        fetch("http://localhost/desarrollo%20web/Reactjs/Clase-React/ws.php")
        .then(p => p.json())
        .then(function (blog) {
            setPublicaciones(blog)
        })
    }, []);

    return (
        <>
            <Menu />
            <h1 className="db-title">Crónicas de los Guerreros Z</h1>
            <section className="blog">
                {Object.values(publicaciones).map((pub, index) => (
                    <article key={index}>
                        <h2>{pub.titulo}</h2>
                        <p><strong>Guerrero Protagonista:</strong> {pub.personaje}</p>
                        <p><strong>Saga de Combate:</strong> {pub.saga}</p>
                        <p>{pub.descripcion}</p>
                    </article>
                ))}
            </section>
        </>
    )
}
