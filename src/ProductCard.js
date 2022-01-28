import React, { useContext } from "react";
import { ShoppingCartContext } from "./App";

export default function ProductCard(props) {
  const shoppingCart = useContext(ShoppingCartContext);
  console.log("CART STUFF:", shoppingCart);
  return (
    <div style={{ width: "300px" }}>
      <img src={`https://source.unsplash.com/200x200/?${props.productName}`} />
      <h1 className="big">{props.productName}</h1>
      <p>{props.productDescription}</p>
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
    </div>
  );
}
