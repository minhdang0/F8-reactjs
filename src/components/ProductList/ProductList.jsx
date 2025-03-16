import { useEffect, useState } from "react";
import "./ProductList.css";

function ProductList({query}) {
  const params = new URLSearchParams(location.search);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(+params.get("page") || 1);
  const [sumPage, setSumPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(+params.get("per_page")||5);
  
  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products?q=${query}&page=${currentPage}&per_page=${itemsPerPage}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.data) {
          const filterProducts = query
            ? response.data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
            : response.data;

          setProducts(filterProducts);
          setSumPage(response.last_page || 1);
        }

        history.replaceState(null, null, `?q=${query}&page=${currentPage}&per_page=${itemsPerPage}`);
      })
      .catch((error) => console.log(error));
  }, [currentPage, itemsPerPage, query]);

  return (
    <div className="product-list-container">
      <ul className="product-list">
        {products.slice(0,itemsPerPage-1).map((item) => {
          return <li className="product-item" key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-price">{item.price}$</p>
                    <p className="product-stock">Còn {item.stock} sản phẩm</p>
                  </div>
                </li>
        })}
      </ul>
      <div className="pagination-container">
        <div className="items-per-page">
          <label for="itemsPerPage">Hiển thị:</label>
          <select id="itemsPerPage" className="items-select"
           onChange={(e) => {
              setItemPerPage(e.target.value)
            }}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="pagination">
          <button className={`${currentPage === 1?"hide":"page-button"}`}  onClick={() => {
              setCurrentPage(currentPage - 1)
            }}>⬅ Trước</button>
          <div className="page-numbers">
            {Array.from({ length: sumPage }).map((_,index) => {
                return  <button 
                        key={index}
                        className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => {
                          setCurrentPage(index+1);
                        }}>{index+1}</button>
            })}
          </div>
          <button className={`${currentPage === 18?"hide":"page-button"}`} onClick={() => {
            setCurrentPage(currentPage + 1);
          }} >Tiếp ➡</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
