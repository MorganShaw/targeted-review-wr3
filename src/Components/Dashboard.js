import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (id) => {
    axios.post(`/api/cart/${id}`)
  }

  return (
    <section>
      <h1>You have arrived at the dashboard</h1>
      <div>
        {products.map((product, index, array) => {
          return (
            <div key={index}>
              <h4>{product.name}</h4>
              <p>{`Price: $${product.price}`}</p>
              <p>{`Description: ${product.description}`}</p>
              <button onClick={()=> {
                addToCart(product.product_id)
              }}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dashboard;
