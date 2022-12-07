function Buscador () {
    return(
        <header>
            <div className="row">
                <div className="col-8">
                    <h1>Buscador de Colaboradores</h1>
                </div>
                <div className="col-4">
                    <input type="search" name="buscador" id="buscador" placeholder="Ingrese el nombre" />
                </div>
            </div>
        </header>
    );
}

export default Buscador;