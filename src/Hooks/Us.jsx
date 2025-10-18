import React from 'react'
import { useState } from 'react'

const Us = () => {
    const [ctitle,setCtitle]=useState("Real Title")
    const changingTitle =()=>
    {
        if(ctitle=='Real Title')
        {
            setCtitle('This is change')
        }else{
            setCtitle("Real Title")
        }
    }
  return (
   <>
   <hr />
   <div className="text-center align-items-center container flex-column  d-flex">
   <h2 className='border  my-3 p-2 bg-success rounded-2'>
    Use state Hook
   </h2>
   <h5 className>
    {ctitle}
   </h5>
   <button onClick={changingTitle} className="btn btn-dark">
    Click it
   </button>
   </div>
   </>
  )
}

export default Us