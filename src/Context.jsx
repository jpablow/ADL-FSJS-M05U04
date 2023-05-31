import { createContext, useEffect, useState } from 'react';
import data from '../src/pizzas.json';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [cartPizzas, setCartPizzas] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function verDetalle(pid) {
    const filteredPizza = data.filter((pizza) => pizza.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].name}`)
    );
  }

  function anhadirPizza(pid) {
    const addedPizza = data
      .filter((pizza) => pizza.id === pid)
      .map((p) => {
        return { id: p.id, img: p.img, name: p.name, price: p.price, q: 1 };
      });
    cartPizzas.length === 0
      ? setCartPizzas([addedPizza[0]])
      : setCartPizzas([...cartPizzas, addedPizza[0]]);
    console.log(cartPizzas);
    setCartTotal(
      cartPizzas.reduce((prev, { price, q }) => prev + price * q, 0)
    );
  }

  function emptyCart() {
    if (cartPizzas.length === 0) {
      handleShow();
    } else {
      setCartPizzas([]);
      handleShow();
    }
  }

  function irAHome() {
    navigate(`/`);
  }

  function irACarro() {
    navigate(`/cart`);
  }

  function formatNum(num) {
    return num.toLocaleString('es-cl', { style: 'currency', currency: 'CLP' });
  }

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

  const addQ = (pid) => {
    const addIdx = cartPizzas.findIndex((el) => el.id === pid);
    cartPizzas[addIdx].q++;
    setCartPizzas([...cartPizzas]);
  };

  const rmvQ = (pid) => {
    const addIdx = cartPizzas.findIndex((el) => el.id === pid);
    cartPizzas[addIdx].q--;
    setCartPizzas([...cartPizzas]);

    setCartTotal(
      cartPizzas.reduce((prev, { price, q }) => prev + price * q, 0)
    );

    console.log(cartTotal);
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
    emptyCart,
    formatNum,
    show,
    handleClose,
    handleShow,
    formatText,
    irACarro,
    addQ,
    rmvQ,
    cartTotal,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
