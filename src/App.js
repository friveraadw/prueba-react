import { useState } from 'react';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaboradores';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  return (
    <main className="App container">
        <Buscador />
        <Formulario />
        <hr></hr>
        <Listado colaboradores={colaboradores}/>
    </main>
  );
}

export default App;
