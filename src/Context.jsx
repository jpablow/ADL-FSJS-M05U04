import { createContext } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  return <Context.Provider value={{ id: 123 }}>{children}</Context.Provider>;
};
