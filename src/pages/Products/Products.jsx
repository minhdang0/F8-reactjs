import React, { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";

const Products = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="page-container">
      <h1 className="page-title">Danh Sách Sản Phẩm</h1>
  
      {loading ? <Loading /> : <ProductList query=""/>}
     
      {!loading && <p className="empty-message">Không có sản phẩm nào.</p>}
    </div>
  );
};

export default Products;
