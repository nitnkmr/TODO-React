import React from 'react'
import './Card.css'
import { useState } from 'react'

const Card = ({title,desc,dltme,edit,index}) => {
  const [done,setDone]=useState(true)
  function handleDone(){
    setDone(!done);
  }
  return (
    <div className='container'>
        <div className="card">
            <h3 className="heading">{title}</h3>
            <div className="description">{desc}</div>
        </div>
        <div className="button">
            <button className='editicon' onClick={()=>dltme(index)}><img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" height={25}/></button>
            <button className='editicon' onClick={()=>edit(index)}><img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="" height={25}/></button>
            <button  className='editicon' onClick={handleDone}>{done?<img src="https://cdn-icons-png.flaticon.com/512/833/833602.png" alt="" height={25}/>:<img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" alt="" height={25}/>}</button>
        </div>
        <div className="check">
        </div>
    </div>
  )
}

export default Card