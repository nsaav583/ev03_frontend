import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio) return;

    onAdd({ nombre, precio: parseFloat(precio) });
    setNombre('');
    setPrecio('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddItem;
