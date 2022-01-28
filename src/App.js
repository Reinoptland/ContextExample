import "./App.css";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";
import ShoppingCartProvider from "./ShoppinCartProvider";

// console.log("CONTEXT?", ShoppingCartContext);

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <ProductCard productName="Apple" price={1} />
          <ProductCard productName="Banana" price={2} />
          <ProductCard productName="Lemon" price={1.5} />
        </header>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
