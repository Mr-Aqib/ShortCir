import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count,setCount]=useState(window.innerWidth)
    const changeSize=()=>
    {
        setCount(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',changeSize)
        return()=>{
            window.removeEventListener('resize',changeSize)//cleaup function
        }
    },)
  return (
    <>
    <hr/>
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <h1 className='m-0 p-0 text-center text-danger'>Use Effect Hook & Cleanup Function</h1>
    <h5 className='m-0 p-0 display-1 text-center'>Size of Screen</h5>
    <h4 className='m-0 p-0 display-1 text-center'>{count} px</h4>
    </div>
    </>
  )
}

export default Useeffect