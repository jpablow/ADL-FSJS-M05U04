import { createContext, useEffect, useState } from 'react';
import data from '../src/pizzas.json';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [cartPizzas, setCartPizzas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const verDetalle = (pid) => {
    const filteredPizza = data.filter((pizza) => pizza.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].name}`)
    );
  };

  const anhadirPizza = (pid) => {
    const addedPizza = data
      .filter((pizza) => pizza.id === pid)
      .map((p) => {
        return { id: p.id, img: p.img, name: p.name, price: p.price, q: 1 };
      });
    cartPizzas.length === 0
      ? setCartPizzas([addedPizza[0]])
      : setCartPizzas([...cartPizzas, addedPizza[0]]);
    console.log(cartPizzas);
  };

  const emptyCart = () => {
    if (cartPizzas.length === 0) {
      handleShow();
    } else {
      setCartPizzas([]);
      handleShow();
    }
  };

  const irAHome = () => {
    navigate(`/`);
  };

  const irACarro = () => {
    navigate(`/cart`);
  };

  const formatNum = (num) => {
    return num.toLocaleString('es-cl', { style: 'currency', currency: 'CLP' });
  };

  function formatText(str) {
    console.log(str);
    const newStr = str
      .split(' ')
      .map((txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1);
      })
      .join(' ');
    console.log(newStr);
    return newStr;
  }

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
    emptyCart,
    formatNum,
    show,
    handleClose,
    handleShow,
    formatText,
    irACarro,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
