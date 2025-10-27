import React, { useEffect, useState } from "react";
import ApiFrontend from "./ApiFrontend";
import { PacmanLoader } from "react-spinners";

const Apifetch = () => {
  const api = "https://api.github.com/users";
  const [store, setStore] = useState([]);
  const [load, setLoad] = useState(true);
  const apiFetch = async () => {
    setLoad(true);
    const response = await fetch(api);
    const data = await response.json();
    setStore(data);
    setLoad(false);
  };

  useEffect(() => {
    apiFetch();
  }, []);
  if (load) {
    return (
      <>
        <div
          className="bg-warning d-flex align-items-center justify-content-center container-fluid"
          style={{ height: "100vh" }}
        >
          <h1>Loading </h1>
          <PacmanLoader />
        </div>
      </>
    );
  } else {
    return (
      <div className="container-fluid bg-success ">
        <div className="row">
          {store.map((item) => (
            <ApiFrontend key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
};

export default Apifetch;
