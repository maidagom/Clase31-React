import { useState, useEffect } from 'react'
import './App.css'
import { guardar, obtener, limpiar } from "./utils/almacenamiento.js";
import { obtenerDatos } from "./utils/llamadas.js";
import Swal from 'sweetalert2'
import { Tarjeta } from './componentes/Tarjeta.jsx';
import { Menu } from './componentes/Menu.jsx';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contacto } from './páginas/Contacto.jsx';
import { blog } from './páginas/blog.jsx';
import { interno } from './páginas/interno.jsx';
import { Paginacion } from './componentes/Paginacion.jsx';

export function App() {

    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(0)
    console.log("aqui");
    

    useEffect(
        () => {
            fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=10`).then(
                peticion => peticion.json()
            ).then(
                datos => {
                    console.log({datos});
                    setPersonajes(datos.items)
                    setTotalPaginas(datos.meta.totalPages)
                }
            )
        }, [pagina]
    )


    return <>
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Menu />
                <section className='grilla'>
                    {
                        personajes.map(
                            function (individuo, indice) {
                                return <Tarjeta key={indice} datos={individuo} />
                            }
                        )
                    }
                </section>
                <Paginacion paginaActual={pagina} setPagina={setPagina} cantidadTotal={totalPaginas}/>
            </Route>
            <Route path="/contacto.html">
                <Contacto />
            </Route>
            <Route path="/blog" component={blog} />
            <Route path="/personajex/:id" component={interno} />
        </Switch>
        </BrowserRouter>
    </>
}
