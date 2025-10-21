import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";

const Singletask = ({items,indexs,del}) => {
    const [check,setCheck]=useState(false)

    return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-between shadow p-3 rounded-4 mb-3 bg-light">
        <h4 className="m-0 p-0 flex-grow-1"
            style={{ textDecoration: check ? "line-through" : "none" }}
        >
            {items}
        </h4>
        <div className="d-flex flex-row gap-2 align-items-center">
            <button 
                onClick={()=>del(indexs)} 
                className='btn btn-sm btn-outline-danger'
                title="Delete Task"
            >
                <FaTrashCan />
            </button>
            <input 
                type="checkbox" 
                checked={check} 
                onChange={()=>setCheck(!check)} 
                className='form-check-input'
                title="Mark as done"
            />
        </div>
    </div>
    )
}

export default Singletask
