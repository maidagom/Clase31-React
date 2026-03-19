import { useState, useEffect } from "react";
import { Menu } from "../componentes/Menu"
import { useParams } from "react-router-dom";
import { obtener } from "../utils/almacenamiento";
import { Tarjeta } from "../componentes/Tarjeta";

export const interno = () => {
    const { id } = useParams()
    const [ocultar, setOcultar] = useState(true)
    const [ Personaje, setPersonaje] = useState({})

    useEffect(
        () => {
            fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then(peticion => peticion.json())
            .then(informacion => {
                setTimeout(() => {setOcultar(false)}, 3000)
                setPersonaje(informacion)
            })
        }, [id])

    return <>
        <Menu />
        { ocultar ?
        <span> Cargando... </span> :
        <div>
            <h1>{Personaje.name}</h1>
            <div>
                <img src={Personaje.image} alt={Personaje.name} />
                <p>
                {Personaje.description}
                </p>
            </div>
            <h3>Transformaciones</h3>
            <section className="grilla">
            {
                Personaje.transformations.length > 0 ?
                Personaje.transformations.map((transformacion, indice) => {
                    return <Tarjeta key={indice} datos={transformacion} enlace={false} />
                }):
                <h3>Este personaje no presenta transformaciones.</h3>
            }
            </section>
        </div>
        }
    </>
}