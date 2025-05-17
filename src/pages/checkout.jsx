import React, { useState, useEffect } from 'react';
import Summary from '../components/Summary';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('shoppingCart');
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    }
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Resumen de Compra</h1>
      <Summary items={items} />
      <div className="text-center">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline">Volver a Home</Link>
      </div>
    </div>
  );
};

export default Checkout;