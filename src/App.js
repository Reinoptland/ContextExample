import { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";

const ShoppingCartContext = createContext({});

// console.log("CONTEXT?", ShoppingCartContext);

function App() {
  const [cart, setCart] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{ cart: cart, setCart: setCart }}>
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
    </ShoppingCartContext.Provider>
  );
}

export default App;
