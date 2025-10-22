import React, { useEffect, useState } from "react";
import Products from "./Products";

const Productmain = () => {
  const [proddb, setProddb] = useState([]);
  const url = "https://dummyjson.com/products";

  const dataFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setProddb(data.products);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div className="bg-dark">
        <div className="container  text-center">
          <h1 className="d-inline-block mx-auto rounded-5 shadow p-3 display-2 text-center text-white ">
            Products
          </h1>
        </div>

        <div className="container my-4 bg-white rounded-4">
          <div className="row g-3">
            {proddb?.map((items, index) => (
              <Products key={index} {...items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productmain;
