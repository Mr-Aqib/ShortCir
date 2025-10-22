import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { TbPointerSearch } from "react-icons/tb";

const SingleAccordian = ({ id, answer, question }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="card shadow mx-auto col-12 col-md-8 col-lg-9 mb-3"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          transition: "all 0.4s ease",
        }}
      >
        <div
          className="p-2 rounded-top bg-dark text-light d-flex flex-row justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
          <h6 className="m-0 d-flex align-items-center gap-2">
            <TbPointerSearch size={18} />
            {question}
          </h6>

          {open ? (
            <>
              <CiCircleMinus
                onClick={() => setOpen(!open)}
                color="red"
                cursor="pointer"
                size={22}
              />
            </>
          ) : (
            <CiCirclePlus
              onClick={() => setOpen(!open)}
              color="red"
              cursor="pointer"
              size={22}
            />
          )}
        </div>

        <div
          style={{
            height: `${open ? "80px" : "0px"}`,
            overflow: "hidden",
            transition: "all 0.4s ease",
            background: "#f8f9fa",
          }}
        >
          <p className="p-2 m-0 text-secondary small">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default SingleAccordian;
