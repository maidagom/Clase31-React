import { useState } from 'react'
import './App.css'
import { guardar, obtener, limpiar } from "./utils/almacenamiento.js";
import { obtenerDatos } from "./utils/llamadas.js";
import Swal from 'sweetalert2'
import { Tarjeta } from './componentes/Tarjeta.jsx';


export function App() {

    const [personajes, setPersonajes] = useState(JSON.parse(obtener("personajes")))
    const [misPersonajes, setMisPersonajes] = useState([])
    const [character, setCharacter] = useState({
        id: 0,
        name: "",
        image: ""
    })

    function handleSubmit(evento) {
        evento.preventDefault();
        console.log("evento", evento.target[0].value);
        const nombre = evento.target[0].value

        const obtenido = personajes.filter(function (personaje) {
            return personaje.name.includes(nombre)
        })

        if (obtenido){
            const encontrado = misPersonajes.find(
            function (item) {
                return item.name == obtenido[0].name 
            }
           )
           if (encontrado?.id === undefined) {
            Swal.fire({
            text: `Hemos encontrado a ${obtenido[0].name}`,
            icon: "success"
            }).then(
                function (datos) {
                setCharacter(obtenido [0])
                setMisPersonajes([...misPersonajes,obtenido [0]])
                console.log(datos);
                }
            )
           }else{
            Swal.fire({
            text: `Ya tienes a ${obtenido[0].name} en tu lista`,
            icon: "error"
            })
           }

        }
       
    }

    return <>
    <form onSubmit={handleSubmit} role='search'>
        <input name='personaje' />
        <button>Buscar</button>
    </form>
    <section className='grilla'>
        {
            misPersonajes.map(
                function (individuo, indice) {
                    return <Tarjeta key={indice} datos={individuo} setMisPersonajes={setMisPersonajes} />
                }
            )
        }
        {/*character.id > 0 && <Tarjeta datos={character}  />*/}
    </section>
    </>
}
