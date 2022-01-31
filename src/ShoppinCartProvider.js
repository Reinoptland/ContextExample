import React, { createContext, useReducer, useContext } from "react";

export const ShoppingCartContext = createContext({});

const initialState = [];
const shoppingCartReducer = (cart, action) => {
  //   console.log("CURRENT STATE", cart, "ACTION", action);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, action.payload];

    case "EMPTY_CART":
      return [];

    default:
      return cart; // nothing happens
  }
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
