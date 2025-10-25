import React from "react";
import { IoMenu } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";

const MenuPage = ({ setMenubtnn, menubtnn }) => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#f9f9f9",
          fontFamily: "'Inter', 'Poppins', sans-serif",
          top: "0%",
          width: !menubtnn ? "0%" : "100%",
          opacity: !menubtnn ? 0 : 1,
          transition: "all 0.9s ease-in-out",
          overflow: "hidden",
        }}
        className="container-fluid position-absolute"
      >
        <div className="p-4 rounded-5 shadow container-fluid d-flex flex-row align-items-center justify-content-between">
          <h4
            className="display-4 fw-bold menu-title"
            style={{
              letterSpacing: "1px",
            }}
          >
            Menu
          </h4>
          <div className="menu-btns d-flex flex-row gap-2">
            <button className="btn custom-btn btn-dark">Contact Us</button>
            <button className="btn custom-btn btn-danger">Carrers</button>
          </div>
        </div>

        <div
          style={{ height: "55%" }}
          className="close-sec d-flex flex-row gap-5 menu-sec align-items-center"
        >
          <div
            style={{ width: "12%", height: "100%" }}
            className="menu d-flex flex-column align-items-end justify-content-center"
          >
            <h4 className="mb-3" style={{ color: "#b3c7ff" }}>
              Close
            </h4>
            <GiTireIronCross
              onClick={() => setMenubtnn(false)}
              size={45}
              color="#b3c7ff"
              cursor="pointer"
              style={{
                transition: "transform 0.3s ease, color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#ff8c8c";
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#b3c7ff";
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
            />
          </div>

          <div
            style={{ width: "60%" }}
            className="text-secc align-items-center justify-content-between d-flex flex-row"
          >
            <h1 className="menu-item">Home</h1>
            <h1 className="menu-item">Products</h1>
            <h1 className="menu-item">Menu</h1>
            <h1 className="menu-item">Letter</h1>
          </div>
        </div>

        <div className="d-flex icon-sec flex-column align-items-center justify-content-center">
          <MdTravelExplore
            cursor="pointer"
            size={70}
            className="explore-icon"
          />
          <p className="mt-2 fw-semibold" style={{ color: "#e3e8ff" }}>
            Explore More
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .menu-title {
            color: #e8f0ff;
            text-shadow: 0 0 10px rgba(179, 199, 255, 0.5);
            transition: all 0.3s;
          }
          .menu-title:hover {
            text-shadow: 0 0 20px rgba(179, 199, 255, 0.9);
          }

          .custom-btn {
            font-weight: 600;
            border-radius: 30px;
            padding: 10px 25px;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          }
          .custom-btn:hover {
            transform: scale(1.08);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
            filter: brightness(1.2);
          }

          .menu-item {
            font-size: 2.8rem;
            letter-spacing: 1px;
            transition: all 0.4s ease;
            position: relative;
            color: #dce6ff;
            cursor: pointer;
          }
          .menu-item::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: #b3c7ff;
            transition: width 0.4s ease;
            border-radius: 3px;
          }
          .menu-item:hover {
            color: #ffffff;
            text-shadow: 0 0 12px #b3c7ff;
            transform: translateY(-3px);
          }
          .menu-item:hover::after {
            width: 100%;
          }

          .explore-icon {
            color: #c2d1ff;
            transition: all 0.4s ease;
          }
          .explore-icon:hover {
            transform: rotate(20deg) scale(1.1);
            color: #ffffff;
            filter: drop-shadow(0 0 10px #b3c7ff);
          }

          @media (max-width: 786px) {
            .text-secc {
              flex-direction: column !important;
              height: 200% !important;
            }
            .close-sec {
              height: 60% !important;
            }
            .icon-sec {
              height: 25%;
            }
            .menu-item {
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default MenuPage;
