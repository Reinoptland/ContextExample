import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard productName="Apple" price={1} />
        <ProductCard productName="Banana" price={2} />
      </header>
    </div>
  );
}

export default App;
