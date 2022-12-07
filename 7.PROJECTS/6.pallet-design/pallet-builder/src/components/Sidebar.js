import React from 'react';
import "./Sidebar.css";
import Logo from "./images/pally_logo.png";
import { FaList, FaLayerGroup } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (

    <div className='sidebar'>
        <div style={{height:"20%"}}>
            <img className='pally-logo mt-5' src={Logo} alt='logo'></img>
        </div>
        <div className='menu-logo'>
            <NavLink to={"/menu"}><FaList style={{color:"white"}}/></NavLink>
        </div>
        <div className='layer-logo'>
            <NavLink to={"/layer"}><FaLayerGroup style={{color:"white"}}/></NavLink>
        </div>
        <div className='version'>v2.3.2</div>
    </div>

  )
}

export default Sidebar