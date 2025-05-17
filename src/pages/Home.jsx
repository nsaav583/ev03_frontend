import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import Button from '../components/Button';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (index) => {
    const nuevos = [...productos];
    nuevos.splice(index, 1);
    setProductos(nuevos);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <AddItem onAdd={agregarProducto} />
      <ItemList productos={productos} onDelete={eliminarProducto} />
      <Button onClick={() => navigate('/checkout')}>
        Ir al resumen
      </Button>
    </div>
  );
};

export default Home;