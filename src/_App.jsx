import { useState, useEffect } from 'react'
import './App.css'
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
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=12`)
            .then(peticion => peticion.json())
            .then(datos => {
                setPersonajes(datos.items)
                setTotalPaginas(datos.meta.totalPages)
                setCargando(false)
            })
            .catch(error => {
                console.error("Error cargando personajes:", error)
                setCargando(false)
            })
    }, [pagina])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Menu />
                    <h1 className="db-title">Guerreros del Universo 7</h1>
                    {cargando ? (
                        <h2 className="db-title">Elevando el Ki...</h2>
                    ) : (
                        <>
                            <section className='grilla'>
                                {personajes.map((individuo, indice) => (
                                    <Tarjeta key={indice} datos={individuo} />
                                ))}
                            </section>
                            <Paginacion paginaActual={pagina} setPagina={setPagina} cantidadTotal={totalPaginas} />
                        </>
                    )}
                </Route>
                <Route path="/contacto.html">
                    <Contacto />
                </Route>
                <Route path="/blog" component={blog} />
                <Route path="/personajex/:id" component={interno} />
            </Switch>
        </BrowserRouter>
    )
}
