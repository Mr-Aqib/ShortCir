import React from "react";
import toast from "react-hot-toast";
import { BiPointer } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
const SingleColor = ({ rgb, indexx, hex }) => {
  return (
    <>
      <div
        className=" col-lg-2 border m-0 p-2 rounded-3"
        style={{
          backgroundColor: `rgb(${rgb})`,
        }}
      >
        <IoCopyOutline
          cursor="pointer"
          onClick={() => {
            navigator.clipboard.writeText(`#${hex}`);
            toast.success("Copied Color");
          }}
        />
        <div className="p-3">
          <h5 className={`${indexx > 10 && "text-white"} text-center`}>
            #{rgb}
          </h5>
        </div>
      </div>
    </>
  );
};

export default SingleColor;
