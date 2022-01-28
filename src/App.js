import { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";

export const ShoppingCartContext = createContext({});

// console.log("CONTEXT?", ShoppingCartContext);

function App() {
  const [cart, setCart] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{ cart: cart, setCart: setCart }}>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <ProductCard productName="Apple" price={1} />
          <ProductCard productName="Banana" price={2} />
          <ProductCard productName="Lemon" price={1.5} />
        </header>
      </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
