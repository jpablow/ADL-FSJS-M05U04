import { createContext, useEffect, useState } from 'react';
import data from '../src/pizzas.json';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [cartPizzas, setCartPizzas] = useState([]);

  const verDetalle = (pid) => {
    const filteredPizza = data.filter((pizza) => pizza.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].name}`)
    );
  };

  const anhadirPizza = (pid) => {
    const addedPizza = data.filter((pizza) => pizza.id === pid);
    cartPizzas.length === 0
      ? setCartPizzas([addedPizza[0]])
      : setCartPizzas([...cartPizzas, addedPizza[0]]);
    console.log(addedPizza[0]);
  };

  const irAHome = () => {
    navigate(`/`);
  };

  // useEffect(() => {
  //   return () => {
  //     console.log(cartPizzas);
  //   };
  // }, [cartPizzas]);

  const globalState = {
    data,
    verDetalle,
    selectedPizza,
    anhadirPizza,
    cartPizzas,
    irAHome,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
