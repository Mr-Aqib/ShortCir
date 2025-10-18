import React from 'react'

const SingleBd = ({id,name,image,years,remove}) => {
  return (
    <>
    <div className="my-2 d-flex justify-content-between shadow p-2">
        <div className="d-flex gap-2 align-items-center ">
            <img className='rounded-circle' height={70} width={70} src= {image} alt="" />
            <div className="d-flex flex-column">
                <h5 className='m-0 p-0 '>{name}</h5>
                <p className='m-0 p-0 text-info'> {years} Years Old</p>
                
            </div>
        </div>
        <button onClick={()=>remove(id)} className="align-self-center btn btn-danger">
            Remove
        </button>
    </div>
    </>
  )
}

export default SingleBd