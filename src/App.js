import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard
          productName="Apple"
          price={1}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          productName="Banana"
          price={2}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          productName="Lemon"
          price={1.5}
          cart={cart}
          setCart={setCart}
        />
      </header>
    </div>
  );
}

export default App;
