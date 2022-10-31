import React from 'react';
import "../style/Cards.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Cards = ({ Card_data }) => {
  function scroll_L() {
    var left = document.querySelector(".scroll_img");
    left.scrollBy(350, 0)
  }
  function scroll_R() {
    var right = document.querySelector(".scroll_img");
    right.scrollBy(-350, 0)
  }
  return (
    <div className='mainbody'>
      <div className='heading'>
        <div><b>New this week</b></div>
        <div>
          <button className='scroll_btn' onClick={scroll_R}><KeyboardArrowLeftIcon /></button>
          <button className='scroll_btn' onClick={scroll_L}><KeyboardArrowRightIcon /></button>
        </div>
      </div>
      <div className='main_scroll_div'>
        <div className='cover'>
          <div className='scroll_img'>

            {
              Card_data.map((item, ind) => {
                return (
                  <div className='child'>
                    <div className='card1' style={{ backgroundImage: `url(${item.image} )`, backgroundSize: "cover" }}>
                      <div className='card_content'>
                        <div>
                          <p className='card_p1'>collection</p>
                          <p className='card_p2'>{item.title}</p>
                        </div>
                        <button className='card_btn'>Show all</button>
                      </div>

                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards