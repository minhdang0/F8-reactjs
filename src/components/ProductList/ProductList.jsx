import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./ProductList.css";

function ProductList({ query }) {
  const params = new URLSearchParams(location.search);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(+params.get("page") || 1);
  const [sumPage, setSumPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(+params.get("per_page") || 10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => setLoading(false));
  }, [currentPage, itemsPerPage, query]);

  return (
    <div className="product-list-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul className="product-list">
            {products.length === 0 ? (
              <li><p>Chưa có sản phẩm nào</p></li>
            ) :(
              products.slice(0, itemsPerPage).map((item) => (
                <li className="product-item" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-price">{item.price}$</p>
                    <p className="product-stock">Còn {item.stock} sản phẩm</p>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="pagination-container">
            <div className="items-per-page">
              <label htmlFor="itemsPerPage">Hiển thị:</label>
              <select
                id="itemsPerPage"
                className="items-select"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemPerPage(Number(e.target.value))
                  setCurrentPage(1);
                }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="pagination">
              <button
                className={currentPage === 1 ? "hide" : "page-button"}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                ⬅ Trước
              </button>
              <div className="page-numbers">
                {Array.from({ length: sumPage }).map((_, index) => (
                  <button
                    key={index}
                    className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className={currentPage === sumPage ? "hide" : "page-button"}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, sumPage))}
              >
                Tiếp ➡
              </button>
            </div>
          </div>
        </>
      )}
  
    </div>
    
  );
}

export default ProductList;
