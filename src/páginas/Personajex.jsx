import { useState, useEffect } from "react";
import { Menu } from "../componentes/Menu"
import { useParams } from "react-router-dom";
import { obtener } from "../utils/almacenamiento";

export const Personajex = () => {
    const { nombre } = useParams()
    const [ocultar, setOcultar] = useState(true)
    const [ Personaje_2, setPersonaje_2] = useState({id: 0})

    useEffect(
        () => {
            const baseDatos =JSON.parse(obtener("personajes"))
            const encontrado = baseDatos.find(
                item => item.name.toLowerCase() === nombre.toLowerCase()
            )

            if (encontrado) {
                setPersonaje_2(encontrado)
                document.title = `Personaje: ${encontrado.name}`
                setTimeout(
                    () => {setOcultar(false)}, 3000
                )
            }
        }, [nombre])

    return <>
        <Menu />
        <h1>¿La información de que personaje quieres ver?, será de {nombre}?</h1>
        { ocultar ?
        <span> Cargando... </span> :
        <div>
            <img src={Personaje_2.image} alt={Personaje_2.name} />
            <p>
            {Personaje_2.description}
            </p>
        </div>
        }
    </>
}