import React, { createContext, useReducer, useContext } from "react";

export const ShoppingCartContext = createContext({});

const initialState = [];
const shoppingCartReducer = (state, action) => {
  console.log("CURRENT STATE", state, "ACTION", action);
  return [];
};

export default function ShoppinCartProvider(props) {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialState);

  //   const [cart, setCart] = useState([]);

  //   function addToCart(product) {
  //     setCart([...cart, product]);
  //   }

  //   function emptyCart() {
  //     setCart([]);
  //   }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cart,
        dispatch: dispatch,
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
