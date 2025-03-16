import React from "react";
import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Danh Sách Sản Phẩm</h1>
      <ProductList query="" /> 
    </div>
  );
};

export default Products;
