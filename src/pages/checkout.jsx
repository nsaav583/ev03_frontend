import React, { useEffect, useState } from 'react';
import Summary from '../components/Summary';
import SavePurchase from '../components/SavePurchase';

const Checkout = () => {
  const [productos, setProductos] = useState([]);
  const [nombreCliente, setNombreCliente] = useState('');

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(guardados);
  }, []);

  const total = productos.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div>
      <h1>Resumen de Compra</h1>
      <Summary
        productos={productos}
        total={total}
        nombreCliente={nombreCliente}
        setNombreCliente={setNombreCliente}
      />
      <SavePurchase
        nombreCliente={nombreCliente}
        total={total}
        productos={productos}
      />
    </div>
  );
};

export default Checkout;