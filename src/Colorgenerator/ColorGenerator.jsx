import React, { useState } from "react";
import toast from "react-hot-toast";
import Values from "values.js";
import SingleColor from "./SingleColor";
const ColorGenerator = () => {
  const [clrinp, setClrinp] = useState("");
  const [clr, setClr] = useState();
  const [err, setErr] = useState(false);
  const clrBtn = (e) => {
    e.preventDefault();
    try {
      setErr(false);
      const colors = new Values(clrinp).all(10);
      setClr(colors);
      console.log(clr);
      toast.success("Colors Generated");
    } catch {
      setErr(true);
      toast.error("Entered InValid Color Value");
    }
  };
  return (
    <>
      <hr />
      <div className="container shadow col-lg-5 p-3 rounded-3">
        <h3 className="m-0 p-0 text-center display-5 text-danger">
          Color Shades Generator
        </h3>
        <form className="my-3 d-flex flex-column gap-2">
          <label htmlFor="">Enter Your Color Name or its Hex Value</label>
          <input
            value={clrinp}
            onChange={(e) => setClrinp(e.target.value)}
            className="form-control"
            type="text"
            name=""
            id=""
          />
          <button onClick={clrBtn} className="btn btn-success">
            Enter
          </button>
        </form>
      </div>
      <div className="my-3 rounded-3  rounded-2 container p-3">
        <div className="row d-flex justify-content-center gap-2">
          {clr?.map((item, index) => {
            return (
              <>
                <SingleColor
                  key={index}
                  indexx={index}
                  hex={item.hex}
                  {...item}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorGenerator;
