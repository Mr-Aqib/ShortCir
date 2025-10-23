import React, { useRef } from "react";

const UseRef = () => {
  const colorref = useRef();
  let rot = 360;

  const handleClick = () => {
    colorref.current.style.transition = "transform 1s";
    colorref.current.style.transform = `rotate(${rot}deg)`;
    rot += 360;
  };

  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
      <div
        className="card shadow-lg rounded-4 p-4 text-center"
        style={{ maxWidth: "500px", width: "100%", background: "#f8f9fa" }}
      >
        <h1
          className="display-3 fw-bold mb-4 text-primary"
          style={{ transition: "transform 1s" }}
        >
          UseRef Hook
        </h1>
        <button
          ref={colorref}
          onClick={handleClick}
          className="btn btn-success btn-lg mb-4 shadow-sm"
        >
          Rotate it
        </button>
      </div>
      <p className="mt-4 text-secondary">
        Click the button to rotate the heading! Smooth animation included.
      </p>
    </div>
  );
};

export default UseRef;
