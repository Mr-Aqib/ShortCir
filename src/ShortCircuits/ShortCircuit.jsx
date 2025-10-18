import React, { useState } from 'react'
import './style.css'
const ShortCitcuit = () => {
    const [count,setCount]=useState(0)
    const handleClick =(e)=>
    {
        if(e.target.innerHTML =='Decrease')
        {
            setCount(count-1)
            if(count >0)
            {
                setCount(count-1)
                
            }
            else if(count ==0)
            {
                setCount(0)
            }
        }
        else if (e.target.innerHTML =='Reset')
        {
            setCount(0)
        }
        else if (e.target.innerHTML=='Increase')
        {
            setCount(count+1)
        }
        
    }

  return (
    <>
    <hr />
    <div className="container my-2 text-center">
        <h1 className='text-danger d-inline-block p-2 rounded-2'>
            Its a Counter
        </h1>
        <h1 className={`${count>0 ?'text-success' : 'text-info'} ${count==0 && 'yellowcount'}`}>
            {count}
        </h1>
        <div className="d-flex flex-row justify-content-center">
        <button onClick={handleClick} className='btn btn-info '>
            Decrease
        </button>
        <button onClick={handleClick} className='btn btn-danger mx-2'>
            Reset
        </button>
        <button onClick={handleClick} className='btn btn-success'>
            Increase
        </button>
        </div>
    </div>
    </>
  )
}

export default ShortCitcuit