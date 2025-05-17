import React from 'react';
import Button from './Button';

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Productos Agregados</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No hay productos en la lista.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
              <span className="text-gray-700">{item.name} x{item.cantidad} - ${item.price * item.cantidad}</span>
              <Button onClick={() => onDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md shadow-md focus:outline-none focus:shadow-outline">Eliminar</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;