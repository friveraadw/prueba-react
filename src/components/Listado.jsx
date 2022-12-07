function Listado (colaboradores) {
    return(
        <section>
            <h4>Listado de colaboradores</h4>
          { 
            colaboradores.colaboradores.lenght == 0 ? 
                <p>No existen colaboradores</p> : 
                colaboradores.colaboradores.map( (colaborador) => (
                    <p>{colaborador.nombre} - {colaborador.correo}</p>
                ))
            }
        </section>
    );
}

export default Listado;