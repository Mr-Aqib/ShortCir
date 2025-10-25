import React from "react";
import { IoMenu } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
const MenuPage = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // smooth dark-to-light blue gradient
          color: "#f9f9f9",
          fontFamily: "'Inter', 'Poppins', sans-serif",
          // top: "0%",
          overflow: "hidden",
        }}
        className="container-fluid position-absolute"
      >
        <div className=" p-5 rounded-5 shadow container-fluid d-flex flex-row align-items-center justify-content-between">
          <h4
            className="display-4 fw-bold"
            style={{
              letterSpacing: "1px",
              //   textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Welcome
          </h4>
          <div className="menu-btns d-flex flex-row gap-2">
            <button className="btn btn-dark">Contact Us</button>
            <button className="btn btn-danger">Carrers</button>
          </div>
        </div>
        <div
          style={{ height: "65%" }}
          className="close-sec d-flex flex-row gap-5 menu-sec align-items-center "
        >
          <div
            style={{ width: "12%", height: "100%" }}
            className="menu d-flex flex-column align-items-end justify-content-center"
          >
            <h4 className="mb-3" style={{ color: "#b3c7ff" }}>
              Close
            </h4>
            <GiTireIronCross size={35} color="#b3c7ff" />
          </div>

          <div
            style={{ width: "60%" }}
            className="text-secc align-items-center justify-content-between  d-flex flex-row "
          >
            <h1>Home</h1>
            <h1>Products</h1>
            <h1>Menu</h1>
            <h1>Letter</h1>
          </div>
        </div>
        <div className="d-flex icon-sec flex-column align-items-center justify-content-center ">
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
          }
        `}
      </style>
    </>
  );
};

export default MenuPage;
