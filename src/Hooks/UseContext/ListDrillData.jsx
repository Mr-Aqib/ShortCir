import React, { useContext } from "react";
import { dataContext } from "./dataContext";
const ListDrillData = () => {
  const { data, removeData } = useContext(dataContext);

  return (
    <>
      <div
        className="container-fluid py-3"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-center text-white fw-bold mb-5">
          🌈 Your Added Names
        </h1>
        <div className="row justify-content-center g-4">
          {data?.map((items, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="card shadow-lg border-0 rounded-4 p-3"
                style={{
                  background:
                    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                  color: "#333",
                  transform: "scale(1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="fw-bold m-0 text-dark">👤 Name:</h4>
                  <p
                    className="m-0 fs-5 fw-semibold text-dark text-truncate"
                    style={{ maxWidth: "150px" }}
                  >
                    {items}
                  </p>
                </div>
                <button
                  onClick={() => removeData(index)}
                  className="btn btn-danger w-100 fw-bold rounded-pill shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
                    border: "none",
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListDrillData;
