import React, { useEffect, useState } from "react";
import "./Loadbutton.css";
const Loadbutton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchproducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products.length) {
        setProducts((prevdata) => [...prevdata, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(`Error Occurred while fetching product client side ${error}`);
    }
  }
  useEffect(() => {
    fetchproducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data ! please Wait</div>;
  }
  console.log(products);

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length ? (
          products.map((item, index) => {
            return (
              <div className="product" key={index}>
                <h1>{item.brand}</h1>
                <img alt={item.title} src={item.thumbnail} />
                <h3>{item.category}</h3>
                <p>{item.description}</p>
              </div>
            );
          })
        ) : (
          <div>No Products found</div>
        )}
      </div>
      <div className="button-container">
        <button
          disabled={disable}
          style={{display: disable ? "none" : ""}}
          className="button"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disable ? <p>You have reached to the Hundred Products</p> : null}
      </div>
    </div>
  );
};

export default Loadbutton;
