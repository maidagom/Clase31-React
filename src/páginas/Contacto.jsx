import { Menu } from "../componentes/Menu.jsx"

export const Contacto = () => {
    return (
        <>
            <Menu />
            <h1 className="db-title">Envía un mensaje al Maestro Roshi</h1>
            <form className="contacto">
                <label htmlFor="correo">Tu Correo (Capsule Corp ID)</label>
                <input 
                    type="email" 
                    name="correo" 
                    id="correo" 
                    placeholder="bulma@capsulecorp.com" 
                />
                
                <label htmlFor="mensaje">Mensaje para el Torneo de las Artes Marciales</label>
                <textarea 
                    name="mensaje" 
                    id="mensaje" 
                    placeholder="Hola Maestro, busco las esferas..."
                    rows="5"
                ></textarea>
                
                <button type="button">¡Enviar con un Kamehameha!</button>
            </form>
        </>
    )
}
