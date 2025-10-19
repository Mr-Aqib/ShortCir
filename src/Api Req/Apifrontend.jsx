import React from 'react'

const ApiFrontend = ({login,avatar_url}) => {
  return (
   <>
   <div className="col-lg-3 my-1">
    <div className="card bg-info shadow d-flex p-2 align-items-center justify-content-center">
        <img height={100} width={100} className='rounded-circle' src={avatar_url} alt="" />
        <h5 className='display-6'> {login}</h5>
    </div>
   </div>
   </>
  )
}

export default ApiFrontend