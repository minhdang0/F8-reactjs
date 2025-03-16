import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProduct from "./pages/NewProduct/NewProduct";
import Products from "./pages/Products/Products";
import Search from "./pages/Search/Search";
import "./App.css";


export default function App() {
  return (
      <Routes>
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  );
}
