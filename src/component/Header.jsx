import React, { useState } from 'react'
import './Header.css'

const Header = ({setdata,data}) => {
    const [search, setsearch] = useState("");
    function handleSearch(e){
        setsearch(e.target.value)
        console.log(search);
    }
  return (
<div className="header">
    <h2>TODO List</h2>
    <div className="nav">
        <ul>
            <li><input type="text" placeholder='search..'value={search} onChange={handleSearch}/></li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</div>
    )
}

export default Header