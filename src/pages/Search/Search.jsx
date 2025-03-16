import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import "./Search.css";

const Search = () => {
  const params = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState(params.get("q") || "");

  useEffect(() => {
    history.replaceState(null, null, `?q=${query}`);
  }, [query]);

  return (
    <div className="page-container">
      <h1 className="search-title">Tìm kiếm sản phẩm</h1>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Nhập tên sản phẩm..."
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setTimeout(() => {
              setQuery(value);
            }, 500);
          }}
        />
      </div>
      <ProductList query={query} />
    </div>
  );
};

export default Search;
