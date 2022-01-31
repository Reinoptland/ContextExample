import React from "react";
import { useCart, addToCart } from "./ShoppinCartProvider";

export default function BuyButton(props) {
  const shoppingCart = useCart();

  return (
    <button
      onClick={() =>
        shoppingCart.dispatch(addToCart(props.productName, props.price))
      }
    >
      Buy now €{props.price}
    </button>
  );
}
