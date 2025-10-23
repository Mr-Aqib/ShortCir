import React from "react";

const FormCard = ({ namee, dob, message, email, deldata, indexx }) => {
  const numb = indexx + 1;
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-10 my-3 mx-auto">
        <div className="card shadow-lg border-0 rounded-4 h-100">
          <div className="card-header bg-success text-white text-center fw-bold rounded-top-4">
            User <span>"{numb}"</span> Info
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="mb-3">
              <p className="mb-2">
                <span className="fw-semibold text-success">Name:</span> {namee}
              </p>
              <p className="mb-2">
                <span className="fw-semibold text-success">DOB:</span> {dob}
              </p>
              <p className="mb-2">
                <span className="fw-semibold text-success">Email:</span> {email}
              </p>
              <p className="mb-2">
                <span className="fw-semibold text-success">Message:</span>{" "}
                {message}
              </p>
            </div>

            <button
              onClick={() => deldata(indexx)}
              className="btn btn-danger w-75 mx-auto fw-semibold shadow-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCard;
