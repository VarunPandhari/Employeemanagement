import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-[#2d4c4c4c] m-3 text-lg w-full p-10'>
        <h1>EMP ID: {props.tour.id}</h1>
        <h1>Name: {props.tour.name}</h1>
       <h1 className='inline'>DOB:</h1><h1 className='inline text-orange-400'> {props.tour.dob}</h1> <br />
       <h1 className='inline'>Role:</h1><h1 className='inline text-green-400'> {props.tour.Role}</h1>
    
      
    </div>
  )
}

export default Card
