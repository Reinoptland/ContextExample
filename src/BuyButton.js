import React from "react";
import { useCart } from "./ShoppinCartProvider";

export default function BuyButton(props) {
  const shoppingCart = useCart();
  console.log("WHAT IS IN CART?", shoppingCart);
  const action = {
    type: "ADD_TO_CART",
    payload: {
      productName: props.productName,
      price: props.price,
    },
  };
  return (
    <button onClick={() => shoppingCart.dispatch(action)}>
      Buy now €{props.price}
    </button>
  );
}
