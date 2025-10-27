import React, { useEffect, useState } from "react";
import { db } from "./Generatordb";
import toast from "react-hot-toast";

const TextGenerator = () => {
  const [inp, setInp] = useState(null);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const clickBtn = (e) => {
    e.preventDefault();
    if (inp <= db.length && inp > 0) {
      setErr(false);
      const newDb = db.slice(0, inp);
      setData(newDb);
      setInp("");
      toast.success(`${inp} Text Generated`);
    } else {
      setErr(true);
      toast.error(`Enter Number between 0 and ${db.length}`);
    }
  };

  useEffect(() => {
    if (inp > db.length) {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [inp]);

  return (
    <>
      <hr />
      <div className="container shadow p-4 rounded-4 col-lg-6 col-md-8 col-sm-10 mx-auto my-4 bg-light">
        <h3 className="display-5 text-center text-primary mb-4">
          Text Generator
        </h3>
        <form className="d-flex flex-column gap-3">
          <label className="fw-semibold">
            Enter Number of text you want to generate
          </label>
          <input
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            type="number"
            placeholder="e.g. 4..."
            className="form-control p-2 shadow-sm rounded-3"
          />
          {err && (
            <p className="text-danger fw-semibold">
              Enter valid Number between 0 and {db.length}
            </p>
          )}
          <button onClick={clickBtn} className="btn btn-primary">
            Generate
          </button>
        </form>
      </div>

      <div className="container my-4 d-flex flex-column gap-3">
        {data?.map((items, index) => {
          return (
            <div
              key={index}
              className="shadow rounded-3 p-3 bg-white border-start border-3 border-primary"
            >
              <p className="m-0 text-center text-dark fw-medium">{items}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TextGenerator;
