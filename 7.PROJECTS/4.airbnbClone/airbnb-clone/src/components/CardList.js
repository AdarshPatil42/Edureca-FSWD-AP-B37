import React from 'react';
import "../style/CardList.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

const CardList = ({ CardList_data }) => {
  return (
    <div className='cardList'>
      {
        CardList_data.map((item, ind) => {
          return (
            <div className='cardContent'>
              <div className='cardImg' style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover" }}>
                <FavoriteBorderIcon className='heart' />
              </div>
              <div>
                <p className='para1'><StarRateIcon />
                  5<span style={{ color: "rgb(124,137,148)" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FlagCircleIcon />{item.country}</span></p>
                <p className='para2'>{item.title}</p>
                <p><b>From ₹</b> {item.price} / Person</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardList