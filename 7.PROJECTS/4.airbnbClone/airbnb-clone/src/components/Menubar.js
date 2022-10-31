import React from 'react'
import "../style/Menubar.css";

const Menubar = () => {
  return (
    <div className='menubar'>
      <div className='sec_1'>
        <div className='tab'>Dates</div>
        <div className='tab'>Group Size</div>
        <div className='tab'>More Filter</div>
        <div className='tab_line'></div>

      </div>
      <div className='sec_2' style={{ width: "70%" }}>
        <div className='tab2'>Great for Group</div>
        <div className='tab2'>Family- Friendly</div>
        <div className='tab2'>Animals</div>
        <div className='tab2'>Arts & Writing</div>
        <div className='tab2'>Banking</div>
        <div className='tab2'>Cooking</div>
        <div className='tab2'>Dance</div>
      </div>
    </div>
  )
}

export default Menubar