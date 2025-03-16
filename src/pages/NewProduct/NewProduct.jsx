import React, { use, useState } from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import Loading from "../../components/Loading/Loading";

const NewProduct = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="page-container">
      <h1 className="page-title">Tạo Sản Phẩm Mới</h1>
      { loading && <ProductForm heading="Tạo Sản Phẩm Mới" submitTitle="Tạo sản phẩm" setLoading={setLoading} />}
    </div>
  );
};

export default NewProduct;
