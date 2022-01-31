import React from "react";
import { useCart, emptyCartAction } from "./ShoppinCartProvider";

export default function NavBar() {
  const shoppingCart = useCart();
  return (
    <nav>
      🛒 {shoppingCart.cart.length} items{" "}
      <button onClick={() => shoppingCart.dispatch(emptyCartAction)}>❌</button>
    </nav>
  );
}
