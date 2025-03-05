import React from "react";
import "./List2.css";

function List2({ products }) {
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <div className="list-container">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div>
                  <h3>Sản phẩm</h3>
              </div>
              <span>{product.title}</span>
              <span>Price:</span> ${product.price}
              <span>Description:</span> {product.description}
            </div>
          ))}
      </div>
    </>
  );
}

export default List2;
