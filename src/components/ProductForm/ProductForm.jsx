import React, { useState } from "react";
import navigate from "navigate";
import "./ProductForm.css";

const ProductForm = ({ submitTitle = "" }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: "",
    sku: "",
    weight: 0,
    minimumOrderQuantity:0,
    thumbnail: ""
  })
  const [errors, setErrors] = useState({});

  const dataBase = [
    { name: "title", type: "text", placeholder: "Tên sản phẩm" },
    { name: "description", type: "textarea", placeholder: "Mô tả sản phẩm" },
    { name: "category", type: "text", placeholder: "Danh mục" },
    { name: "price", type: "number", placeholder: "Giá ($)" },
    { name: "discountPercentage", type: "number", placeholder: "Giảm giá (%)" },
    { name: "rating", type: "number", placeholder: "Đánh giá (0-5)" },
    { name: "stock", type: "number", placeholder: "Tồn kho" },
    { name: "tags", type: "text", placeholder: "Tags (cách nhau bằng dấu phẩy)" },
    { name: "brand", type: "text", placeholder: "Thương hiệu" },
    { name: "sku", type: "text", placeholder: "Mã SKU" },
    { name: "weight", type: "number", placeholder: "Trọng lượng (kg)" },
    { name: "minimumOrderQuantity", type: "number", placeholder: "Số lượng tối thiểu" },
    { name: "thumbnail", type: "text", placeholder: "URL hình ảnh" },
  ]

  const setItemValues = (e)  => {
      const {name, value} = e.target;
      setProduct({
        ...product,
        [name] : name === "tag" ? value.split(",") : value
      })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(false);
    setErrors({});
    try {
        const res = await fetch("https://api01.f8team.dev/api/products", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(product)
          })
          const data = await res.json();

          if(!res.ok){
            setErrors(data.errors || {})
          } else navigate("/products")
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
    <div className="product-form-container">
      <form className="product-form">
        {dataBase.map((item, index) => (
            <div key={index} className="form-group">
              {item.type === "textarea" ? (
                <textarea
                  name={item.name}
                  className="form-textarea"
                  placeholder={item.placeholder}
                  required
                  value={product[item.name] || ""}
                  onChange={setItemValues}
                />
              ) : (
                <input
                  type={item.type}
                  name={item.name}
                  className="form-input"
                  placeholder={item.placeholder}
                  required
                  value={product[item.name] || ""}
                  onChange={setItemValues}
                />
              )}
              {errors[item.name] && <p className="error-message">{errors[item.name]}</p>}
            </div>
          ))}

        <button type="submit" className="submit-button" onClick={handleSubmit} >
          {submitTitle}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
