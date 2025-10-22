import React, { useEffect, useState } from "react";
import Products from "./Products";

const Productmain = () => {
  const [proddb, setProddb] = useState([]);
  const [load, setLoad] = useState(false);
  const url = "https://dummyjson.com/products";

  const dataFetch = async () => {
    setLoad(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setProddb(data.products);
    setLoad(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div className="bg-dark min-vh-100">
        <div className="container text-center py-4">
          <h1 className="d-inline-block mx-auto rounded-5 shadow p-3 display-2 text-center text-white">
            Products
          </h1>
        </div>

        {/* Loading screen */}
        {load ? (
          <div className="container my-5 text-center text-white">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h3 className="mt-3">Loading products...</h3>
          </div>
        ) : (
          <div className="container my-4 bg-white rounded-4">
            <div className="row g-3">
              {proddb?.map((items, index) => (
                <Products key={index} {...items} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Productmain;
