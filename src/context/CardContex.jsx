import { createContext, useState, useContext } from 'react';

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CardContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CardContext.Provider>
  );
};