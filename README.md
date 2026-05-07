# 🐉 Explorador de Personajes de Dragon Ball

Una aplicación React dinámica para explorar personajes del universo de Dragon Ball, con datos en tiempo real de la API de Dragon Ball, paginación y un blog impulsado por los personajes.

## 🚀 Características

- **Galería de Personajes**: Explora una vasta lista de guerreros del universo Dragon Ball.
- **Paginación**: Navega fluidamente a través de múltiples páginas de datos de personajes.
- **Enrutamiento Dinámico**: Vistas detalladas para cada personaje usando `react-router-dom`.
- **Blog de Guerreros Z**: Una sección de blog especializada (se integra con un backend PHP local).
- **Interfaz de Usuario Interactiva**: Diseño moderno y responsivo con estética temática de Dragon Ball.
- **Gestión de Estado**: Utiliza hooks de React (`useState`, `useEffect`) para un manejo eficiente de los datos.

## 🛠️ Tecnologías Utilizadas

- **Framework**: [React 19](https://react.dev/)
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/)
- **Enrutamiento**: [React Router v5](https://v5.reactrouter.com/)
- **API**: [Dragon Ball API](https://dragonball-api.com/)
- **Estilos**: CSS Personalizado (App.css, index.css)
- **Utilidades**: [SweetAlert2](https://sweetalert2.github.io/) para alertas pulidas.

## 📦 Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd Clase31-React-main
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 📂 Estructura del Proyecto

- `src/componentes`: Componentes de UI reutilizables como `Tarjeta`, `Menu` y `Paginacion`.
- `src/páginas`: Vistas principales de la aplicación (Inicio, Blog, Contacto, Detalles del Personaje).
- `src/utils`: Funciones auxiliares para llamadas a la API y almacenamiento local.
- `src/data`: Datos JSON locales para respaldo o funciones específicas.
- `ws.php`: Script de backend local para la sección del blog.

## 📝 Nota

La sección del blog requiere un entorno local (como XAMPP) para ejecutar el script `ws.php` si deseas ver la integración con la base de datos local.
