import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
    return <nav>
        <NavLink activeClassName="Aqui-estoy" to="/" exact>Inicio</NavLink>
        <NavLink activeClassName="Aqui-estoy" to="/blog">Blog</NavLink>
        <NavLink activeClassName="Aqui-estoy" to="/contacto.html">Contacto</NavLink>
        <NavLink activeClassName="Aqui-estoy" to="/personajex/Goku">Personaje</NavLink>
    </nav>
}