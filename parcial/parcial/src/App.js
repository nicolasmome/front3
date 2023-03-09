import React, { useState } from 'react'
import './App.css';
import { Form } from './componentes/form';

function App() {
  const [informacion, setInformacion] = useState({});
  const [isMensajeDeError, setMensajeDeError] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data)

    if (data.nombre.trim()!== ""&& data.nombre.length > 3  && data.nombre.charAt(0) !== " "
      && data.color.length > 6) {
 
        setInformacion(data)
    } else {
      setMensajeDeError(true)
    }
  };

  return (
    <div className="App">
      <p>Formulario Color Preferido</p>
      <Form
        onSubmit={onSubmit}
        titulo="Formulario de Color Preferido"
      />
      {informacion && !isMensajeDeError &&
        <div>
          <span>Nombre: {informacion.nombre}</span>
          <br />
          <br />
          <span>Color: {informacion.color}</span>
        </div>
      }
      {isMensajeDeError && 
        <span>"Por favor chequea que la información sea correcta"</span>
      }
    </div>
  );
}

export default App;
