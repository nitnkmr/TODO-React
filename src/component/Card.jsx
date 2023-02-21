import React from 'react'
import './Card.css'
import { useState } from 'react'

const Card = ({title,desc,dltme,key}) => {
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
            <button onClick={()=>dltme(key)}>Delete</button>
        </div>
        <div className="check">
          <button id='lable' onClick={handleDone} style={done?{backgroundColor:"rgb(244, 64, 64)"}:{backgroundColor:"white"}}>{done?"mark as done":"✅"}</button>
        </div>
    </div>
  )
}

export default Card