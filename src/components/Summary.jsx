import React from 'react';

const Summary = ({ productos, total, nombreCliente, setNombreCliente }) => {
  return (
    <div>
      <h2>Total: ${total.toFixed(2)}</h2>

      <label>
        Nombre del Cliente:
        <input
          type="text"
          value={nombreCliente}
          onChange={(e) => setNombreCliente(e.target.value)}
        />
      </label>

      <ul>
        {productos.map((p, i) => (
          <li key={i}>
            {p.nombre} - ${p.precio.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;