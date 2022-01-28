import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppinCartProvider";

export default function NavBar() {
  const shoppingCart = useContext(ShoppingCartContext);
  return <nav>🛒 {shoppingCart.cart.length} items</nav>;
}
