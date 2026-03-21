export function Paginacion({paginaActual, cantidadTotal, setPagina}) {
    return (
        <footer className="paginacion-container">
            <h3 className="db-title">Esferas del Dragón (Páginas)</h3>
            <ul className="paginacion">
                {Array.from({length: cantidadTotal}).map((_, idx) => {
                    const nroPagina = idx + 1;
                    return (
                        <li 
                            key={idx} 
                            onClick={() => setPagina(nroPagina)} 
                            className={paginaActual === nroPagina ? "pagina-actual" : ""}
                        >
                            {nroPagina}
                        </li>
                    );
                })}
            </ul>
            <div style={{textAlign: 'center', marginTop: '10px', color: 'var(--db-yellow)', fontWeight: 'bold'}}>
                Total de páginas encontradas: {cantidadTotal}
            </div>
        </footer>
    );
}
