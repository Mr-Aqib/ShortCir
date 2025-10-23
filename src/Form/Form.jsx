import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [field, setField] = useState({
    namee: "",
    email: "",
    dob: "",
    message: "",
  });
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const { namee, email, dob, message } = field;

  const handleChange = (e) => {
    setField((preVal) => ({
      ...preVal,
      [e.target.name]: e.target.value,
    }));
  };

  const btnClick = (e) => {
    e.preventDefault();
    if (!namee) {
      toast.error("Please fill the Name field!");
    } else if (!email) {
      toast.error("Please fill the Email field!");
    } else if (!dob) {
      toast.error("Please select Date of Birth!");
    } else if (!message) {
      toast.error("Please fill the Message field!");
    } else {
      setErr(false);
      setData([...data, field]);
      toast.success("Data Inserted");
    }
  };

  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center py-5"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #d4f7e6, #e9f7ef)",
        }}
      >
        <div
          className="col-11 col-md-8 col-lg-5 bg-white rounded-4 shadow-lg p-4"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <h2 className="text-center text-success fw-bold mb-4">
            ✨ Input Form
          </h2>

          <form className="needs-validation">
            <div className="mb-3">
              <label className="form-label fw-semibold">Enter your Name</label>
              <input
                onChange={handleChange}
                value={namee}
                name="namee"
                className="form-control border-success-subtle p-2 rounded-3"
                placeholder="e.g. Aqib"
                type="text"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Enter your Email</label>
              <input
                onChange={handleChange}
                name="email"
                value={email}
                type="email"
                className="form-control border-success-subtle p-2 rounded-3"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Date of Birth</label>
              <input
                name="dob"
                onChange={handleChange}
                value={dob}
                type="date"
                className="form-control border-success-subtle p-2 rounded-3"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <input
                name="message"
                onChange={handleChange}
                value={message}
                type="text"
                className="form-control border-success-subtle p-2 rounded-3"
                placeholder="Write something..."
              />
            </div>

            <div className="text-center">
              <button
                onClick={btnClick}
                className="btn btn-success w-75 fw-semibold py-2 rounded-3 shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
