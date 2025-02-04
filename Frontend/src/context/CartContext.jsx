import React, { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom Hook to Use Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add Item to Cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Clear Cart After Payment
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
