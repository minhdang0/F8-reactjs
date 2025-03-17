import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import "./Search.css";

const Search = () => {
  const params = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState(params.get("q") || "");
  const [value, setValue] = useState("");

  useEffect(() => {
    history.replaceState(null, null, `?q=${query}`);
  }, [query]);
  let myTime;
  return (
    <div className="page-container">
      <h1 className="search-title">Tìm kiếm sản phẩm</h1>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Nhập tên sản phẩm..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            clearTimeout(myTime);
            myTime = setTimeout(() => {
              setQuery(e.target.value);
            }, 500);
          }}
        />
      </div>
      <ProductList query={query} />
    </div>
  );
};

export default Search;
