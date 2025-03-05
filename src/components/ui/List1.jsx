import React from "react";
import "./List1.css"; // Import file CSS

function List1({ products }) {
  return (
    <div className="container">
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="card">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  );
}

export default List1;
