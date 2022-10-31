import React, { useState } from 'react';
import logo from "../img/Airbnb-logo.jpg";
import "../style/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Sign Up", "Log In", "Help"];
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt="logo" className='logo_img'></img>
        </div>

        <div className='header_center'>
          <div><p className='header_center_p'><b>Any Where</b></p></div>
          <div><p className='header_center_p'><b>Any Week</b></p></div>
          <div><p><b>Add guests</b></p></div>
          <span className='search_icon'><SearchIcon /></span>
        </div>

        <div className='header_right'>
          <div className='header_right_div1'><p className='header_right_div1_p'><b>Become a host</b></p></div>
          <div><p className='header_right_div1_p2'><LanguageIcon /></p></div>
          <div>
            <button className='btn' onClick={() => setOpen(!open)}><MenuIcon /><AccountCircleIcon /></button>
          </div>
        </div>
        <input id='check' type="checkbox" />
        <lable for="check" className='men_btn'><MenuIcon /></lable>

      </div>

      <div className='header_border'></div>

      {
        open && (
          <div className='menu'>
            <ul>
              {
                Menus.map((menu) => {
                  return (<li key={menu} className="li" onClick={() => setOpen(false)}>{menu}</li>)
                })
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Header