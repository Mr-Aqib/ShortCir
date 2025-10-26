import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

const TodoCard = ({ name, work, date, id, removeTodo }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card shadow-sm h-100 border-0"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "#fff",
          borderRadius: "15px",
        }}
      >
        <div className="card-body d-flex flex-column justify-content-between h-100">
          <div>
            <h4 className="fw-bold">{name}</h4>
            <p className="mb-2">{work}</p>
            <small className="d-block mb-1">{date}</small>
          </div>
          <div className="text-end mt-3">
            <IoTrashBinOutline
              onClick={() => removeTodo(id)}
              cursor="pointer"
              size={28}
              color="#ff4d4f"
              className="hover-scale"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.2);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TodoCard;
