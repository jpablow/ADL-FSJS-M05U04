import { createContext, useEffect, useState } from 'react';
import data from '../src/pizzas.json';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedPizza, setSelectedPizza] = useState([]);

  const verDetalle = (pid) => {
    const filteredPizza = data.filter((pizza) => pizza.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].name}`)
    );
  };

  // useEffect(() => {
  //   return () => {
  //     console.log('data: ', data);
  //   };
  // }, []);

  const globalState = {
    data,
    verDetalle,
    selectedPizza,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
