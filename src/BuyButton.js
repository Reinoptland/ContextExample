import React from "react";
import { useCart } from "./ShoppinCartProvider";

export default function BuyButton(props) {
  const shoppingCart = useCart();
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
