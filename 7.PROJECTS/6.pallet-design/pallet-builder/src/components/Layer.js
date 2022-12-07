import React from 'react'
import "./Layer.css"
import { FaTrash, FaWhmcs, FaLayerGroup, FaPen } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';


const Layer = () => {

  return (
    <div className='Layer-menu'>
      <div className='menu-bar'>
      <div className='menu-heading'>
        <h4 className='mx-auto'>Pallet</h4>
      </div>

      <div className='menu-symbol'>
        <div>
          <div className='symbols'><NavLink to={"/layer/autostack"} className ='link'><FaLayerGroup/></NavLink></div>
          <div className='symbols'><NavLink to={"/layer/recorder"} className ='link'><FaPen/></NavLink></div>
        </div>
        <div>
          <div className='symbols'><NavLink to={"/layer/setting"} className ='link'><FaWhmcs/></NavLink></div>
          <div className='symbols text-danger'><FaTrash/></div>
        </div>
      </div>
      </div>
      <div className='layer-outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layer