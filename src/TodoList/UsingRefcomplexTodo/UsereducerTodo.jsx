import React, { useReducer, useState } from "react";
import { reducer } from "./TodoReducer";
import toast from "react-hot-toast";
import TodoCard from "./TodoCard";

const initialState = {
  todo: [],
  message: "",
  isError: false,
  isSuccess: false,
  errorField: null,
};

const UsereducerTodo = () => {
  const [fields, setFields] = useState({
    name: "",
    work: "",
    date: "",
    id: Date.now(),
  });

  const { name, work, date } = fields;

  const handleChange = (e) => {
    setFields((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }));
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const clickBtn = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "Name_not_added" });
      toast.error("Name Not Added");
    } else if (!work) {
      dispatch({ type: "Work_not_added" });
      toast.error("Work Not Added");
    } else if (!date) {
      dispatch({ type: "Date_not_added" });
      toast.error("Date Not Added");
    } else {
      dispatch({ type: "ADD_DATA", payload: fields });
      toast.success("Added Your Todo SuccessFully");
      setFields({
        name: "",
        work: "",
        date: "",
        id: Date.now(),
      });
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "Delete_Todo", payload: id });
    toast.success("Removed");
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        className="text-center py-5 shadow-sm"
        style={{
          background: "linear-gradient(90deg, #667eea, #764ba2)",
          color: "#fff",
        }}
      >
        <h1 className="fw-bold display-4">Complex Todo</h1>
        <p className="lead">Using useReducer Hook</p>
      </div>

      {/* Form */}
      <div className="container col-12 col-sm-10 col-md-8 col-lg-6 my-5">
        <form
          className="p-4 shadow rounded-4 mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="mb-3">
            <label className="form-label text-white">Name</label>
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Your name .... Ali"
              className="form-control bg-light bg-opacity-25 text-white border-0"
              onChange={handleChange}
            />
            {state.isError && state.errorField === "name" && (
              <p className="text-danger">{state.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Work</label>
            <input
              value={work}
              name="work"
              type="text"
              placeholder="Enter Work .... Gym"
              className="form-control bg-light bg-opacity-25 text-white border-0"
              onChange={handleChange}
            />
            {state.isError && state.errorField === "work" && (
              <p className="text-danger">{state.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Date</label>
            <input
              type="date"
              className="form-control bg-light bg-opacity-25 text-white border-0"
              value={date}
              name="date"
              onChange={handleChange}
            />
            {state.isError && state.errorField === "date" && (
              <p className="text-danger">{state.message}</p>
            )}
          </div>

          <button
            onClick={clickBtn}
            className="btn w-100 fw-bold text-white"
            style={{
              background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
            }}
          >
            Enter
          </button>
        </form>
      </div>

      {/* Todo Cards */}
      <div className="container">
        <div className="row g-4">
          {state?.todo?.map((items, index) => (
            <TodoCard removeTodo={deleteTodo} key={index} {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsereducerTodo;
