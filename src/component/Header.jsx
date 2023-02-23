import React, { useState } from 'react'
import './Header.css'

const Header = ({setdata,data}) => {
    const [search, setsearch] = useState("");
    const [bar, setbar] = useState(false);
    function handleSearch(e){
        setsearch(e.target.value)
        console.log(search);
    }
    function barHandle(){
        setbar(!bar)
    }
  return (
<div className="header">
    <h2>TODO List</h2>
    <input id='search' type="search" placeholder='search..'value={search} onChange={handleSearch}/>
    <div className="nav" style={(bar)?{display:'none'}:{display:'flex'}}>
        {/* <ul>
            <li>Home</li>
           
        </ul> */}
    </div>
    {/* <div className="navi" onClick={barHandle}>{(bar)?<img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" width={25}/>:<img src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" alt="" width={25} />}</div> */}
</div>
    )
}

export default Header