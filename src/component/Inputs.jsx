import React from 'react'
import "./Inputs.css"
import Card from './Card'
import { useState } from 'react'

const Inputs = ({setdata,data}) => {
    const[val1,setVal1]=useState('')
    const[val2,setVal2]=useState('')
  
    
    function textHandle1(e){
        setVal1(e.target.value)
        console.log(val1);
        console.log(val2);
        
    }
    function textHandle2(e){
        setVal2(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        setdata([...data,{title:val1,desc:val2}]) 
        setVal1("")
        setVal2("")
    }
    function dltme(i){
      let newData=[...data]
      newData.splice(i,1);
      setdata(newData);
    }
  return (
    <>
<div className="inputs">
    <div className="title">Enter task</div>
    <form>
        <input type="text" placeholder='title' value={val1} onChange={textHandle1}/>
        <textarea cols="60" rows="5" placeholder='Description' value={val2} onChange={textHandle2}></textarea>
        <button onClick={handleSubmit}>Add Task</button>
    </form>
</div>
    {data.map((e,i)=><Card title={e.title} dltme={dltme} desc={e.desc} key={i}/>)}
</>
    )
}

export default Inputs