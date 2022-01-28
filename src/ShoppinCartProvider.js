import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export default function ShoppinCartProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ cart: cart, setCart: setCart }}>
      {/* PUT THE REST OF THE APP HERE ... */}
      {props.children}
    </ShoppingCartContext.Provider>
  );
}
