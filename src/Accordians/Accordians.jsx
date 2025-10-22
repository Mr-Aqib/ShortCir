import React from "react";
import { accorDb } from "./Accorddb";
import SingleAccordian from "./SingleAccordian";

const Accordians = () => {
  return (
    <>
      <div className="container my-4">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger display-5">Accordions</h2>
          <hr className="w-25 mx-auto text-danger opacity-75" />
        </div>

        {/* Accordion Container */}
        <div className="rounded-4 shadow-lg p-3 bg-light">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="d-flex flex-column gap-3">
                {accorDb?.map((item, index) => (
                  <SingleAccordian key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordians;
