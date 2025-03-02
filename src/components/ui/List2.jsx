import React from 'react';
import './List2.css';

function List2({ products }) {
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <ul >
        {products.length > 0 &&
          products.map(product => (
            <li key={product.id}>
              <span><strong>Title:</strong> {product.title} </span>
              <span><strong> Price:</strong> {product.price} </span>
              <span><strong> Description:</strong> {product.description}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default List2;
