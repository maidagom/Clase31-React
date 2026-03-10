import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  return (
    <>
      <Tarjeta nombre="Homer Simpson" imagen="https://cdn.thesimpsonsapi.com/500/character/1.webp" edad="39" />
      <Tarjeta nombre="Maude Flanders" imagen="https://cdn.thesimpsonsapi.com/500/character/10.webp" edad="" />
      <Tarjeta nombre="Homer Simpson" imagen="https://cdn.thesimpsonsapi.com/500/character/1.webp" edad="39" />
    </>
  )
}

export const Tarjeta = (propiedades) => {
  const [estado, cambiarEstado]= useState("vivo")

  const {nombre, imagen, edad} = propiedades

  function handleClick() {
    const nuevoEstado = estado === "vivo" ? "muerto" : "vivo"
    cambiarEstado(nuevoEstado)
  } 

  return (
    <>
      <div className="card">
        <div className="logo">
          <img alt={nombre} src={imagen}/>
        </div>
        <div className="">{nombre}</div>
        <div className={`status-${estado}`}>
          {estado} - Edad: {edad}
        </div>
        <button onClick={handleClick}>
          Cambio de estado
        </button>
      </div>
      
    </>
  );
}


export function Cabecera(propiedades) {
  const {nombre} = propiedades
  return (
    <>
      <h1>Hola a todos! Soy {nombre}</h1>
    </>
  )
}