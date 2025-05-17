import React, { useState, useEffect } from 'react';
import Button from './Button';

const AddItem = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  const [productoSeleccionado, setproductoSeleccionado] = useState('');
  const [cantidad, setcantidad] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://front2.nsideas.cl/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = () => {
    if (productoSeleccionado && cantidad > 0) {
      const productToAdd = products.find(p => p.id === parseInt(productoSeleccionado));
      if (productToAdd) {
        onAdd({
          id: productToAdd.id,
          name: productToAdd.name,
          price: productToAdd.price,
          cantidad: cantidad,
        });
        setproductoSeleccionado('');
        setcantidad(1);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Agregar Producto</h2>
      <select
        value={productoSeleccionado}
        onChange={(e) => setproductoSeleccionado(e.target.value)}
        className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      >
        <option value="">Seleccione un producto</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setcantidad(parseInt(e.target.value, 10))}
        className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
      />
      <Button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline">Agregar</Button>
    </div>
  );
};

export default AddItem;