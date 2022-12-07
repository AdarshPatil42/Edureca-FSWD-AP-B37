import React from 'react';
import "./Menu.css";
import { FaAngleRight } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='main'>
    <div className='menu-container'>
      <div className='menu-heading'>
        <h4>Project Data</h4>
      </div>
      <div >
        <NavLink to={"menu/project"} className="menu-link">
          <span>Project</span><span><FaAngleRight /></span>
        </NavLink>

        <NavLink to={"/menu/product"} className="menu-link">
          <span>Product</span><span><FaAngleRight /></span>
        </NavLink>

        <NavLink to={"/menu/pallet"} className="menu-link">
          <span>Pallet</span><span><FaAngleRight /></span>
        </NavLink>

        <NavLink to={"/menu/palletizing"} className="menu-link">
          <span>Palletizing</span><span><FaAngleRight /></span>
        </NavLink>
      </div>
    </div>
    <div className='outlet'>
      <Outlet />
    </div>
    </div>
  )
}

export default Menu