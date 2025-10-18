import React from 'react'

const Event = () => {
  const clickIt =()=>
  {
    alert("External hai ye")
  }
  return (
    <>
    <div className="container text-center ">
      <h5 className='border p-3 m-0 bg-danger'>
        This the Event inline and external
      </h5>
      <div className="d-flex flex-column gap-3 align-items-center">
        <div onClick={clickIt} className=" button btn btn-dark">
          External 
        </div>
        <div onClick={()=>(alert ('Inline'))} className="button btn btn-danger">
        Inline
        </div>
        </div>
    </div>
    </>
  )
}

export default Event