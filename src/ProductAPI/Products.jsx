import React, { useState } from "react";

const Products = ({
  title,
  images,
  category,
  discountPercentage,
  minimumOrderQuantity,
  price,
  rating,
  tags,
  brand,
  stock,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
      <div
        className="card shadow"
        style={{
          background: "linear-gradient(135deg, #f0f4ff, #d9e4ff)",
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        {/* Product Image & Title */}
        <img
          src={images[0]}
          className="card-img-top mx-auto d-block mt-3"
          alt={title}
          style={{
            maxHeight: "200px",
            objectFit: "contain",
            transition: "transform 0.3s",
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{title}</h5>
          <p className="text-center h5 text-primary mb-2">${price}</p>

          {/* Brand & Discount */}
          <p className="mb-1">
            <strong>Brand:</strong>{" "}
            <span className="text-secondary">{brand}</span>
          </p>
          <p className="mb-2">
            <strong>Discount:</strong>{" "}
            <span className="text-secondary">{discountPercentage}%</span>
          </p>

          {/* Rating */}
          <div className="mb-2">
            {Array.from({ length: Math.round(rating) }).map((_, index) => (
              <span key={index} className="text-warning">
                ⭐
              </span>
            ))}
          </div>

          {/* Stock & See More Button */}
          <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
            <p
              className={`mb-0 ${stock < 10 ? "text-danger" : "text-success"}`}
              style={{ fontSize: "0.9rem" }}
            >
              {stock < 10
                ? `Hurry! Only ${stock} left`
                : `${stock} pieces available`}
            </p>
            <button
              className="btn btn-sm btn-outline-secondary mt-2 mt-sm-0"
              onClick={() => setOpen(!open)}
            >
              {!open ? "See More" : "Close"}
            </button>
          </div>

          {/* Smooth Expandable Section */}
          <div
            style={{
              maxHeight: open ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.5s ease",
            }}
          >
            <p className="mb-1">
              <strong>Minimum Order Quantity:</strong> {minimumOrderQuantity}
            </p>
            <p className="mb-1 text-capitalize">
              <strong>Category:</strong> {category}
            </p>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <strong>Tags:</strong>
              <div className="d-flex flex-wrap gap-1">
                {tags?.map((item, index) => (
                  <span
                    key={index}
                    className="badge bg-secondary text-capitalize"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <style jsx>{`
          .card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Products;
