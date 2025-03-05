import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShopPage() {
    const [products, setProducts] = useState([]);
    async function fetchProduct() {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data);
    }
    useEffect(() => {
        fetchProduct();
    }, [])
    console.log(products);
    return (
       <>
        <h1>Hot sale</h1>
        {products && products.map((item) =>
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
                <Link to={`/product-detail/${item.id}`} >Xem chi tiết sản phẩm</Link>
            </div>
        )}
       </>
    );
}

export default ShopPage;
