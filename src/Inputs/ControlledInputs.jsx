import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [err, setErr] = useState(false)

  const clickBtn = (e) => {
    e.preventDefault()
    if (!name) {
      toast.error("Enter your name")
      setErr(true)
    } else {
      setErr(false)
      console.log(name)
      setName("")
    }
    setTimeout(() => {
      setErr(false)
    }, 4000)
  }

  return (
    <>
    <hr />
      <div className=" d-flex justify-content-center align-items-center bg-light px-3">
        <div className="p-5 container-fluid d-flex justify-content-center">
          <div className="shadow-lg rounded-4 bg-white p-4 p-sm-5 w-100" style={{ maxWidth: '450px' }}>
            <h3 className="text-center text-primary mb-4 fw-bold">
              Controlled Inputs
            </h3>

            <form className="d-flex flex-column gap-3">
              <label htmlFor="name" className="fw-semibold text-secondary text-center text-sm-start">
                Enter Name Below
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name Here..."
                type="text"
                id="name"
                className="form-control form-control-lg"
              />
              {err && (
                <p className="text-danger small m-0 text-center">
                  Enter Your Name
                </p>
              )}
              <button
                onClick={clickBtn}
                className="btn btn-dark rounded-pill fw-semibold mt-2"
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ControlledInputs
