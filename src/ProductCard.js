import React from "react";

export default function ProductCard(props) {
  console.log("PROPS:", props);
  return (
    <div style={{ width: "300px" }}>
      <img src={`https://source.unsplash.com/200x200/?${props.productName}`} />
      <h1 className="big">{props.productName}</h1>
      <p>{props.productDescription}</p>
      <button>Buy now €{props.price}</button>
    </div>
  );
}

// export default function ProductCard({
//   productName,
//   price,
//   productDescription,
//   ...props
// }) {
//   console.log("PROPS:", productName, price, productDescription);
//   return (
//     <div style={{ width: "300px" }}>
//       <img src={`https://source.unsplash.com/200x200/?${productName}`} />
//       <h1>{productName}</h1>
//       <p>{productDescription}</p>
//       <button>Buy now €{price}</button>
//     </div>
//   );
// }
