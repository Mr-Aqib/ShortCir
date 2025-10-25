import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";

const MenuUseRef = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // smooth dark-to-light blue gradient
          color: "#f9f9f9",
          fontFamily: "'Inter', 'Poppins', sans-serif",
        }}
        className="container-fluid d-flex flex-column"
      >
        {/* Header */}
        <div className="p-3 d-flex flex-row align-items-center justify-content-between">
          <h4
            className="display-4 fw-bold"
            style={{
              letterSpacing: "1px",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Welcome
          </h4>

          <div
            style={{ transition: "0.5s" }}
            className="d-flex position-relative flex-column align-items-center gap-1"
          >
            <div className="d-flex flex-row align-items-center gap-2 cursor-pointer">
              <p className="m-0 p-0 fw-semibold" style={{ color: "#e0e0e0" }}>
                {open ? "English" : "Choose Language"}
              </p>
              {open ? (
                <IoIosArrowDropdown
                  onClick={() => setOpen(false)}
                  cursor="pointer"
                  size={24}
                />
              ) : (
                <IoIosArrowDropup
                  onClick={() => setOpen(true)}
                  cursor="pointer"
                  size={24}
                />
              )}
            </div>

            <div
              className="bg-white text-dark rounded-4 p-3 mt-2 d-flex flex-column shadow"
              style={{
                height: open ? "140px" : "0px",
                overflow: "hidden",
                opacity: open ? 1 : 0,
                transition: "all 0.4s",
                width: "140px",
                top: "40px",
                position: "absolute",
                zIndex: 10,
              }}
            >
              <p className="m-0 p-1 hover-item rounded">Urdu</p>
              <p className="m-0 p-1 hover-item rounded">Arabic</p>
              <p className="m-0 p-1 hover-item rounded">Chinese</p>
              <p className="m-0 p-1 hover-item rounded">English</p>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div
          style={{ height: "65%" }}
          className="second-sec d-flex flex-row gap-5 menu-sec align-items-center"
        >
          <div
            style={{ width: "12%", height: "100%" }}
            className="menu d-flex flex-column align-items-end justify-content-center"
          >
            <h4 className="mb-3" style={{ color: "#b3c7ff" }}>
              Menu
            </h4>
            <IoMenu size={35} color="#b3c7ff" />
          </div>

          <div className="text-sec d-flex flex-column gap-3">
            <h1
              className="fw-bold"
              style={{
                fontSize: "2.6rem",
                color: "#ffffff",
                textShadow: "0 2px 6px rgba(0,0,0,0.25)",
              }}
            >
              Experience the Website
            </h1>
            <h3
              className="fw-semibold"
              style={{
                color: "#d0e1ff",
                letterSpacing: "0.5px",
              }}
            >
              Grow your business & your future
            </h3>
            <p className="fs-5" style={{ color: "#f1f1f1" }}>
              Discover the experience now
            </p>
          </div>
        </div>

        {/* Explore Section */}
        <div className="d-flex flex-column align-items-center justify-content-center py-4">
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

      {/* CSS */}
      <style jsx>{`
        /* Hover effect for dropdown */
        .hover-item:hover {
          background-color: #f1f1f1;
          cursor: pointer;
          font-weight: 500;
        }

        /* Hover icon effect */
        .explore-icon {
          color: #cfd8ff;
          transition: all 0.3s ease;
        }

        .explore-icon:hover {
          color: #80d0c7;
          transform: scale(1.15);
          filter: drop-shadow(0 0 10px #80d0c7);
        }

        /* Mobile responsiveness */
        @media (max-width: 786px) {
          .menu-sec {
            flex-direction: column !important;
          }

          .menu {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-bottom: 20px;
          }

          .text-sec {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center;
          }

          .second-sec {
            gap: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default MenuUseRef;
