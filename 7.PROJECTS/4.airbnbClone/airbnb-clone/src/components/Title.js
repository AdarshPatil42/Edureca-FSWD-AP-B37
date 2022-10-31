import React from 'react'
import "../style/Title.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Title = ({ text }) => {
  return (
    <div className='title' style={{ fontSize: "30px" }}>
      <p><b>{text}</b></p>
      <div style={{ fontSize: "25px" }}>
        <span>Show (08) </span>
        <button className='title_btn'><KeyboardArrowLeftIcon /></button>
        <button className='title_btn'><KeyboardArrowRightIcon /></button>
      </div>
    </div>
  )
}

export default Title