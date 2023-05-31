import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [cartPizzas, setCartPizzas] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const endpoint = '/pizzas.json';

  const getPizzas = async () => {
    const resp = await fetch(endpoint);
    const dat = await resp.json();
    setData(dat);
  };

  useEffect(() => {
    return () => {
      getPizzas();
    };
  }, []);

  function cartTotalizer() {
    if (cartPizzas.length === 0) {
      return setCartTotal(
        cartPizzas.reduce((prev, { price, q }) => prev + price * q, 0)
      );
    } else {
      return setCartTotal(
        cartPizzas.reduce((prev, { price, q }) => prev + price * q, 0)
      );
    }
  }

  function verDetalle(pid) {
    const filteredPizza = data.filter((pizza) => pizza.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].name}`)
    );
  }

  const anhadirPizza = (pid) => {
    const addedPizza = data
      .filter((pizza) => pizza.id === pid)
      .map((p) => {
        return { id: p.id, img: p.img, name: p.name, price: p.price, q: 1 };
      });
    cartPizzas.length === 0
      ? setCartPizzas([addedPizza[0]])
      : setCartPizzas([...cartPizzas, addedPizza[0]]);
    cartTotalizer();
  };

  function emptyCart() {
    if (cartPizzas.length === 0) {
      handleShow();
    } else {
      setCartPizzas([]);
      handleShow();
    }
    cartTotalizer();
  }

  function irAHome() {
    navigate(`/`);
  }

  function irACarro() {
    navigate(`/cart`);
  }

  const addQ = (pid) => {
    const addIdx = cartPizzas.findIndex((el) => el.id === pid);
    cartPizzas[addIdx].q++;
    setCartPizzas([...cartPizzas]);
    cartTotalizer();
  };

  const rmvQ = (pid) => {
    const addIdx = cartPizzas.findIndex((el) => el.id === pid);
    cartPizzas[addIdx].q--;
    setCartPizzas([...cartPizzas]);
    cartTotalizer();
  };

  function formatNum(num) {
    return num.toLocaleString('es-cl', { style: 'currency', currency: 'CLP' });
  }

  function formatText(str) {
    const newStr = str
      .split(' ')
      .map((txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1);
      })
      .join(' ');
    return newStr;
  }

  useEffect(() => {
    return () => {
      cartTotalizer();
    };
  });

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
    cartTotalizer,
  };
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
