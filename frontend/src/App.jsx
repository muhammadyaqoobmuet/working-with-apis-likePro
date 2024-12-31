// src/App.jsx
import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList.jsx";
import { useCustomQuery } from "./hooks/useCustomQuery.js";
import { getProductBySearch } from "./services/GetProducts.js";


function App() {
  const [search, setSearch] = useState("");

  const fetchProducts = () => getProductBySearch(search || "");
  console.log(fetchProducts);
  const { data: products, error, loading } = useCustomQuery(fetchProducts, [search]);

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <ProductList products={products} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;
