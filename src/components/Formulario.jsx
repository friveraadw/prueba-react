import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";

function Formulario () {

        const [nombre, setNombre] = useState("");
        const [correo, setCorreo] = useState("");

        const guardarColaborador = (e) => {
            e.preventDefault();
            const newUser = {
                name: nombre.value
            }
           setUsers([newUser]) 
        };
    
    return(
        <section className="container">
            <form onSubmit={guardarColaborador}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre del colaborador</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" name="nombre" id="nombre" placeholder="Ingresa el nombre del colaborador" />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo del colaborador</label>
                    <input onChange={(e) => setCorreo(e.target.value)} type="mail" className="form-control" name="correo" id="correo" placeholder="Ingresa el correo del colaborador" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={guardarColaborador}>Agregar Colaborador</button>
                </div>
            </form>
            
        </section>
    );
}

export default Formulario;