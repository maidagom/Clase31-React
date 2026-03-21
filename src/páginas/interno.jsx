import { useState, useEffect } from "react";
import { Menu } from "../componentes/Menu"
import { useParams } from "react-router-dom";
import { Tarjeta } from "../componentes/Tarjeta";

export const interno = () => {
    const { id } = useParams()
    const [cargando, setCargando] = useState(true)
    const [personaje, setPersonaje] = useState(null)

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters/${id}`)
        .then(peticion => peticion.json())
        .then(informacion => {
            setPersonaje(informacion)
            setCargando(false)
        })
    }, [id])

    if (cargando) return (
        <>
            <Menu />
            <h1 className="db-title">Reuniendo Ki...</h1>
        </>
    )

    return (
        <>
            <Menu />
            <div className="personaje-detalle">
                <h1 className="db-title">{personaje.name}</h1>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <img src={personaje.image} alt={personaje.name} style={{maxHeight: '400px'}} />
                    <p style={{fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'center'}}>
                        {personaje.description}
                    </p>
                </div>
                
                {personaje.transformations && personaje.transformations.length > 0 && (
                    <>
                        <h2 className="db-title" style={{marginTop: '40px'}}>¡Aumentando el Nivel de Pelea!</h2>
                        <section className="grilla">
                            {personaje.transformations.map((transformacion, indice) => (
                                <Tarjeta key={indice} datos={transformacion} enlace={false} />
                            ))}
                        </section>
                    </>
                )}
            </div>
        </>
    )
}
