import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  personajesLista  from './data/personajes.json'
import { guardar, obtener, limpiar } from "./utils/almacenamiento.js";
/*import { personajes } from './data/personajes.js'*/

export function App() {
  function btnLimpiar() {
    limpiar()
  }
  return (
    <Fragment>
      <button onClick={btnLimpiar}>Limpiar todo</button>

      {personajesLista.map(
        function (personaje) {
          const {id, name, portrait_path, age, status: estado} = personaje
          return <Tarjeta key={id} nombre={name} imagen={portrait_path} edad={age} condicion={estado} />
        }
      )}

    </Fragment>
  )
}
export const Tarjeta = (propiedades) => {
  ///Alive,Deceased
  const {nombre, imagen, edad, condicion} = propiedades
  const [estado, cambiarEstado]= useState(condicion);
  function handleClick() {
    cambiarEstado(
      function(nuevoEstado) {
        const dato = nuevoEstado == "Alive" ? "Deceased" : "Alive"
        guardar(propiedades.nombre, dato)
        return dato
      }
    )
  } 

  return (
    estado === "Alive" &&
    <>
      <div className="card">
        <div className="logo">
          <img alt={nombre} src={imagen}/>
        </div>
        <div className="">{nombre}</div>
        <div className={`status-${obtener(nombre) === "Alive"
          ? "Vivo" : "Muerto"}`}>
          {estado === "Alive" ? "Vivo" : "Muerto"} - Edad: {edad}
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