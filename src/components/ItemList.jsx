import React from 'react';

const ItemList = ({ productos, onDelete }) => {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>
          {producto.nombre} - ${producto.precio.toFixed(2)}
          <button onClick={() => onDelete(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;