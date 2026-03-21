import { useEffect, useState } from "react"
import { Menu } from "../componentes/Menu.jsx"


export const blog = () => {

    const [publicaciones, setPublicaciones] = useState({})
    useEffect(
        () => {
            fetch("http://localhost/desarrollo%20web/Reactjs/Clase-React/ws.php")
            .then(p => p.json())
            .then(function (blog) {
                setPublicaciones(blog)
            })
        }, []
    );
    console.log(Object.values(publicaciones));
    /* 
    Estas son las claves
        descripcion:"Goku comienza su viaje junto a Bulma en busca de las esferas del dragón."
        personaje: "Goku"
        saga: "Dragon Ball"
        titulo: "El inicio de la aventura"
    */

    return <>
    <Menu/>
    <h1>Blog</h1>
    <section className="blog">
    {
        Object.values(publicaciones).map((pub, index) => (
            <article key={index}>
                <h2>{pub.titulo}</h2>
                <p><strong>Personaje:</strong> {pub.personaje}</p>
                <p><strong>Saga:</strong> {pub.saga}</p>
                <p>{pub.descripcion}</p>
            </article>
        ))
    }
    </section>
    </>
}