import React, { useContext } from "react";
import { ShoppingCartContext } from "./App";

export default function BuyButton(props) {
  const shoppingCart = useContext(ShoppingCartContext);
  return (
    <button
      onClick={() =>
        shoppingCart.setCart([
          ...shoppingCart.cart,
          { productName: props.productName, price: props.price },
        ])
      }
    >
      Buy now €{props.price}
    </button>
  );
}
