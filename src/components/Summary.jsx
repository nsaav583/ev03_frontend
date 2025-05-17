import React, { useState } from 'react';
import SavePurchase from '../components/SavePurchase';
import Button from './Button'; // 

const Summary = ({ items }) => {
  const [clientName, setClientName] = useState('');
  const total = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Detalle de la Compra</h2>
      {items.length === 0 ? (
        <p className="text-gray-600 mb-4">No hay productos en el carrito.</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {items.map((item) => (
            <li key={item.id} className="text-gray-700">
              {item.name} x{item.cantidad} - ${item.price * item.cantidad}
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-semibold text-gray-800 mb-4">Total: ${total}</p>
      <form className="mb-4">
        <label htmlFor="clientName" className="block text-gray-700 text-sm font-bold mb-2">Nombre del Cliente: </label>
        <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </form>
      <SavePurchase clientName={clientName} total={total} items={items} />
    </div>
  );
};

export default Summary;