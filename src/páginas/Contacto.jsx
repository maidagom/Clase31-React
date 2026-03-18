import { Menu } from "../componentes/Menu.jsx"


export const Contacto = () => {
    return <>
    <Menu/>
    <h1>Página de contacto</h1>
    <form className="contacto" action="/" method="post" style={
        {textAlign: "center",
            gap: "16px"
         }
    }>
    <label htmlFor="correo">Correo</label>
    <input type="email" name="correo" id="correo" placeholder="example@gmail.com" />
    <label htmlFor="mensaje">Deja tu mensaje</label><br />
    <textarea name="mensaje" id="mensaje" placeholder="Ingresa un mensaje.."></textarea>
    <button>Enviar</button>
    </form>
    </>
}