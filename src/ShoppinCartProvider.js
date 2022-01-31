import React, { createContext, useState, useContext } from "react";

export const ShoppingCartContext = createContext({});

export default function ShoppinCartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        emptyCart: emptyCart,
      }}
    >
      {/* PUT THE REST OF THE APP HERE ... */}
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export function useCart() {
  return useContext(ShoppingCartContext);
}
