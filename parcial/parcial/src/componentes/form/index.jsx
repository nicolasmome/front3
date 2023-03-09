import React, { useState } from 'react';

export const Form = ({onSubmit, titulo}) => {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');

  const handlerChangeColor = (e) => {
    setColor(e.target.value);
  }

  const handlerChangeNombre = (e) => {
    setNombre(e.target.value); 
  }
  
  const handlerSubmit = (e) => {

    e.preventDefault();

    const data = {
      nombre,
      color
    }
    
    onSubmit(data)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <h1>{titulo}</h1>
      <input
        placeholder="Ingresar Color"
        id="color"
        type="text"
        name="color"
        value={color}
        onChange={handlerChangeColor}
      />
      <input
        placeholder="Ingresar Nombre"
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={handlerChangeNombre}
      />
      <input type="submit" />
   
    </form>
  )
}