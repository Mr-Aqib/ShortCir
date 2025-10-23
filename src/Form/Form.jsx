import React, { useState } from "react";
import toast from "react-hot-toast";
import FormCard from "./FormCard";

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
  const delData = (id) => {
    const newData = data.filter((item, index) => index !== id);
    setData(newData);
  };
  return (
    <>
      <div
        className="container-fluid flex-column d-flex align-items-center justify-content-center py-5"
        style={{
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
        <div className="my-3 container">
          {data.length > 0 ? (
            <h1 className="text-center display-4 text-danger">
              User-Information
            </h1>
          ) : (
            <h1 className="text-center display-5 text-danger">
              No User Added Yet
            </h1>
          )}
          <div className="row gap-4 my-3">
            {data?.map((items, index) => {
              return (
                <>
                  <FormCard
                    key={index}
                    deldata={delData}
                    {...items}
                    indexx={index}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
