import React, { useState } from 'react'
import SingleBd from './SingleBd'
import { bddata } from './bddb'
const Birthday = () => {
    const [bdata,setBdata]=useState(bddata)
    const removePerson=(id)=>
    {
      const newPeople= bdata.filter((item,index)=>
      {
        return (
          item.id != id
        )
      })
      setBdata(newPeople)
    }

  return (
    <>
    <div className="bg-success  d-flex align-items-center"
    style={{height:'100vh'}}>
        <div className="container py-2 d-flex card border col-lg-4">
            <h1 className='m-0 p-0 display-6 text-center'>{bdata.length} Birthdays in a List</h1>
           {
            bdata.map((items,index)=>
            {
              return(
                <>
                  <SingleBd remove={removePerson}  key={items.id} {...items}  />
                </>
              )
            })
           }
             <button  className={`my-2 btn ${bdata.length==0 ?'btn-success' : 'btn-danger'}`} 
              onClick={bdata.length >0 ? ()=>setBdata([]): ()=>setBdata(bddata) } > 
              {bdata.length==0 ?'Refresh All' : 'Remove All' }
             
              </button>
              
        </div>
      
    </div>
    </>
  )
}

export default Birthday