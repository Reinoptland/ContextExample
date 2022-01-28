import React from "react";
import { useCart } from "./ShoppinCartProvider";

export default function NavBar() {
  const shoppingCart = useCart();
  return <nav>🛒 {shoppingCart.cart.length} items</nav>;
}
