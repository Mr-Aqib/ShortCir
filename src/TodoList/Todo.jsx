import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Singletask from './Singletask'

const Todo = () => {
    const [todo,setTodo]=useState("")
    const [err,setErr]=useState(false)
    const [data,setData]=useState([])

    const clickBtn =(e)=>{
      e.preventDefault()
      if(!todo){
        setErr(true)
        toast.error("Enter in field")
      }
      else{
        toast.success("Task added successfully")
        setData([...data,todo])
        setTodo("")
        setErr(false)
      }
      setTimeout(() => {
        setErr(false)
      }, 4000);
    }

    const deleteTodo=(no)=>{
      const newTodo=data.filter((item,index)=> index !== no)
      setData(newTodo)
      toast.success("Task Removed",{
        icon:"🗑️"
      })
    }

    return (
    <>
    <hr />
    <div className="container shadow p-4 rounded-4 col-lg-6 col-md-8 col-sm-10 mx-auto my-4 bg-light">
        <h1 className='m-0 p-0 display-5 text-center text-primary mb-3'>Todo List</h1>
        <form className='d-flex flex-column gap-2'>
            <label htmlFor="" className="fw-bold">Enter your Task</label>
            <input 
                value={todo} 
                onChange={(e)=>setTodo(e.target.value)} 
                placeholder='Type your task here...' 
                type="text" 
                className='form-control p-2 shadow-sm rounded-3'
            />
            {err && <p className='text-danger fw-semibold'>Please enter a task first</p>}
            <button onClick={clickBtn} className="btn btn-primary mt-2">
                Add Task
            </button>
        </form>
    </div>

    <div className="container shadow p-4 rounded-4 col-lg-6 col-md-8 col-sm-10 mx-auto bg-white">
      <div className="row g-3">
        {data?.map((item,index)=>{
          return (
          <Singletask key={index} items={item} del={deleteTodo} indexs={index}/>
          )
        })}
      </div>
    </div>
    </>
    )
}

export default Todo
