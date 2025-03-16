import React, { use, useState } from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import Loading from "../../components/Loading/Loading";

const NewProduct = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="page-container">
      <h1 className="page-title">Tạo Sản Phẩm Mới</h1>
      <ProductForm heading="Tạo Sản Phẩm Mới" submitTitle="Tạo sản phẩm" />
    </div>
  );
};

export default NewProduct;
