import React, { useState } from 'react';
import Button from './Button';

const SavePurchase = ({ clientName, description, total }) => {
  const [estado, setEstado] = useState('');

  const enviarCompra = async () => {
    if (!clientName === 0) {
      alert("Debes ingresar tu nombre");
      return;
    }

    const datos = {
      clientName: clientName,
      description,
      total
    };

    try {
      const response = await fetch('https://front2.nsideas.cl/api/purchases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });

      if (response.ok) {
        setEstado('✅ Compra enviada exitosamente');
        localStorage.removeItem('productos');
      } else {
        const errorData = await response.json();
        setEstado(`❌ Error del servidor: ${errorData.message || 'Error desconocido'}`);
      }
    } catch (error) {
      setEstado('❌ Error de red al enviar la compra');
    }
  };

  return (
    <div>
      <Button onClick={enviarCompra}>Guardar Compra</Button>
      {estado && <p>{estado}</p>}
    </div>
  );
};

export default SavePurchase;