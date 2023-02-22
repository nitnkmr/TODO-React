import React from 'react'
import "./Inputs.css"
import Card from './Card'
import { useState } from 'react'

const Inputs = ({setdata,data,dataArr}) => {
    const[val1,setVal1]=useState('')
    const[val2,setVal2]=useState('')
    const [valid, setvalid] = useState(false);
  
    
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
        if(val1!=="" && val2!==""){
        setdata([...data,{title:val1,desc:val2}]) 
        setVal1("")
        setVal2("")
        setvalid(false)
    }
    else{
        setvalid(true)

    }
    }
    function dltme(i){
      let newData=[...data]
      newData.splice(i,1);
      setdata(newData);
    }
    function edit(i){
      let newData=[...data]
      setVal1(newData[i].title)
      setVal2(newData[i].desc)
      newData.splice(i,1);
      setdata(newData);
    }
    
  return (
    <>
<div className="inputs">
    <div className="title">Enter task</div>
    <form>
        <input type="text" placeholder='title' value={val1} onChange={textHandle1} required />
        <textarea cols="60" rows="5" placeholder='Description' value={val2} onChange={textHandle2} required></textarea>
        <button onClick={handleSubmit} type="submit">Add Task</button>
    </form>
</div>
        {valid?<div style={{color:"red",fontSize:"20px",textAlign:"center"}}>--**Fill Both Input Fields**--</div>:null}
    {data.map((e,i)=><Card title={e.title} dltme={dltme} edit={edit} desc={e.desc} key={i} index={i}/>)}
</>
    )
}

export default Inputs