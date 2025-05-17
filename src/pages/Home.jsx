import React, { useState, useEffect } from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

const Home = () => {
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('shoppingCart');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shoppingCart', JSON.stringify(items));
    }
  }, [items]);

  const handleAdd = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + item.cantidad } : i
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Lista de Compras</h1>
      <AddItem onAdd={handleAdd} />
      <ItemList items={items} onDelete={handleDelete} />
      <div className="text-center">
        <a href="/checkout" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline">Ir al Checkout</a>
      </div>
    </div>
  );
};

export default Home;