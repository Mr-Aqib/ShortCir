import React from 'react'
import SingleBd from './SingleBd'
import { bddata } from './bddb'
const Birthday = () => {
  return (
    <>
    <div className="bg-success d-flex align-items-center"
    style={{height:'100vh'}}>
        <div className="container d-flex card border col-lg-4">
            <h1 className='m-0 p-0 display-6 text-center'>5 Birthdays in a List</h1>
           {
            bddata.map((items,index)=>
            {
              return(
                <>
                  <SingleBd key={index} {...items}/>
                </>
              )
            })
           }
        </div>
       
    </div>
    </>
  )
}

export default Birthday