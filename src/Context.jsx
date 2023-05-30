import { createContext, useEffect, useState } from 'react';
import data from '../src/pizzas.json';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [selectedPizza, setSelectedPizza] = useState([]);
  const navigate = useNavigate();

  const verDetalle = (pid) => {
    setSelectedPizza(data.filter((pizza) => pizza.id === pid));
    navigate(`/pizza/${selectedPizza.name}`);
  };

  // useEffect(() => {
  //   return () => {
  //     console.log('data: ', data);
  //   };
  // }, []);

  const globalState = {
    data,
    verDetalle,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
