import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <NavLink activeClassName="Aqui-estoy" to="/" exact>🏠 Inicio</NavLink>
            <NavLink activeClassName="Aqui-estoy" to="/blog">📜 Blog Z</NavLink>
            <NavLink activeClassName="Aqui-estoy" to="/contacto.html">✉️ Contacto</NavLink>
        </nav>
    )
}
