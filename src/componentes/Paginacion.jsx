export function Paginacion({paginaActual, cantidadTotal, setPagina}) {
    return <footer>
        <ul className="paginacion">
          {Array.from({length: cantidadTotal}).map(
            (_, idx) => {
               return <li key={idx} onClick={() => setPagina(idx + 1)} className={`pagina-${paginaActual === idx + 1 ? "actual" : ""}`}>{idx + 1}</li>
            }
          )}  
        </ul>
        <div>Tenemos un total de {cantidadTotal} páginas</div>
    </footer>
}