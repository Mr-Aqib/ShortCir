import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import ListData from "./ListData";

export const dataContext = createContext();

const PropDrilling = () => {
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);

  const btnClick = (e) => {
    e.preventDefault();
    if (!inp) {
      toast.error("First Enter Data");
    } else {
      setData([...data, inp]);
      setInp("");
    }
  };

  const removeData = (id) => {
    const newData = data.filter((items, index) => index !== id);
    setData(newData);
  };

  return (
    <dataContext.Provider value={{ data, removeData }}>
      <div
        className="container-fluid min-vh-100 py-5"
        style={{
          background: "linear-gradient(135deg, #43cea2, #185a9d)",
          color: "white",
        }}
      >
        {/* Heading Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-light">🌟 Add Data</h1>
          <p className="fs-5 text-white-50">
            Using Context API (Prop Drilling)
          </p>
        </div>

        {/* Input Section */}
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="col-lg-5 col-md-8 col-sm-10 p-4 rounded-5 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
              color: "#333",
            }}
          >
            <form>
              <label
                htmlFor="dataInput"
                className="form-label fw-bold fs-5 text-dark"
              >
                Enter Name:
              </label>
              <input
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                type="text"
                id="dataInput"
                className="form-control rounded-pill shadow-sm"
                placeholder="Type your name here..."
              />
            </form>
            <button
              onClick={btnClick}
              className="mx-auto d-block my-4 btn fw-bold text-white rounded-pill shadow"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                letterSpacing: "1px",
              }}
            >
              ➕ Add Data
            </button>
          </div>
        </div>

        {/* List Section */}
        <div
          className="container mt-5 shadow-lg rounded-4 p-4"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <ListData />
        </div>
      </div>
    </dataContext.Provider>
  );
};

export default PropDrilling;
