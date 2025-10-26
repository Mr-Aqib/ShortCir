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
  });
  const { name, work, date } = fields;
  const [todoarr, setTodoarr] = useState([]);
  const handleChange = (e) => {
    setFields((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }));
  };
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //BUTTON TO ADD TODO
  const clickBtn = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "Name_not_added" });
    } else if (!work) {
      dispatch({ type: "Work_not_added" });
    } else if (!date) {
      dispatch({ type: "Date_not_added" });
    } else {
      setTodoarr([...todoarr, fields]);
      dispatch({ type: "ADD_DATA", payload: todoarr });
      toast.success("Added Your Todo SuccessFully");
      setFields({
        name: "",
        work: "",
        date: "",
      });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="my-3 text-center container rounded-5 shadow d-flex flex-column">
          <h3 className="display-1">Complex Todo</h3>
          <p>Using Hook UseRedcuer</p>
        </div>
        <div className="container col-lg-8">
          <form className="w-50 p-3 shadow rounded-5 mx-auto">
            <label htmlFor="">Name</label>
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Your name .... Ali"
              className="form-control"
              id=""
              onChange={handleChange}
            />
            {state.isError && state.errorField == "name" && (
              <p className="text-danger">{state.message}</p>
            )}
            <label htmlFor="">Work</label>
            <input
              value={work}
              name="work"
              type="text"
              placeholder="Enter Work .... Gym"
              className="form-control"
              onChange={handleChange}
            />
            {state.isError && state.errorField == "work" && (
              <p className="text-danger">{state.message}</p>
            )}
            <label htmlFor="">Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Date"
              id=""
              value={date}
              name="date"
              onChange={handleChange}
            />
            {state.isError && state.errorField == "date" && (
              <p className="text-danger">{state.message}</p>
            )}
            <button
              onClick={clickBtn}
              className="btn my-3 mx-auto d-block btn-success"
            >
              Enter
            </button>
          </form>
        </div>
        <div className="container-fluid">
          <div className="row">
            {state?.todo?.map((items, index) => {
              return (
                <>
                  <TodoCard />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsereducerTodo;
