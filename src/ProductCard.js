import React from "react";

export default function ProductCard(props) {
  return (
    <div style={{ width: "300px" }}>
      <img src={`https://source.unsplash.com/200x200/?${props.productName}`} />
      <h1 className="big">{props.productName}</h1>
      <p>{props.productDescription}</p>
      <button
        onClick={() =>
          props.setCart([
            ...props.cart,
            { productName: props.productName, price: props.price },
          ])
        }
      >
        Buy now €{props.price}
      </button>
    </div>
  );
}
