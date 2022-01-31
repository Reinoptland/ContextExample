import React from "react";
import { useCart } from "./ShoppinCartProvider";

export default function NavBar() {
  const shoppingCart = useCart();
  const emptyCartAction = {
    type: "EMPTY_CART",
  };
  return (
    <nav>
      🛒 {shoppingCart.cart.length} items{" "}
      <button onClick={() => shoppingCart.dispatch(emptyCartAction)}>❌</button>
    </nav>
  );
}
