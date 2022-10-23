import React, { useState } from 'react'
import "./carapp.css"



function CarRegistration() {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [item, setItem] = useState([]);

  const addCar = (event) => {
    event.preventDefault();

    if (!name && !number && !checkIn && !checkOut) {

    } else {
      setItem([...item, { name, number, checkIn, checkOut }]);
      setName("");
      setNumber("");
      setCheckIn("");
      setCheckOut("");
    }
  }

  const deleteItem = (id) => {
    const removeCar = item.filter((ele, ind) => {
      return ind !== id;
    })
    setItem(removeCar);
  }
  return (
    <div>
      <div className='heading'>
        <h1>CAR ENTRY REGISTER</h1>
      </div>
      <form className='col-6 body'>
        <div className="mb-3">
          <label className="form-label" name="lblname" for="name">Driver Name</label>
          <input className="form-control text-uppercase" type="text" name="name" placeholder='Enter Name'
            value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label" name="lblemail" for="number">Vehical Number</label>
          <input className="form-control text-uppercase" type="vehical number" name="number"
            placeholder='Enter Number' value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>

        <div className="mb-3 date">
          <div >
            <label className="form-label" name="lbldob" for="time">Check In</label>
            <input className="form-control" type="time" name="checkIn" value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div>
            <label className="form-label" name="lbldob" for="date">Check Out</label>
            <input className="form-control" type="time" name="checkOut" value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>


        <div className="mb-3 button">
          <button className="btn btn-primary " onClick={addCar}>ADD CAR</button>
        </div>
      </form>

      <div className='list'>
        <h1>CAR LIST</h1>
        <p className='listpara'>Total Cars : {item.length}</p>
      </div>
      <div className='container'>
        <div className='listheading'>
          <div className='element'>Driver Name</div>
          <div className='element'>Car Number</div>
          <div className='element'>CheckIn</div>
          <div className='element'>CheckOut</div>
          <div className='element'>Action</div>
        </div>
        {
          item.map((element, index) => {
            return (
              <div className='carlist'>
                <div className='element text-uppercase'>{element.name}</div>
                <div className='element text-uppercase'>{element.number}</div>
                <div className='element'>{element.checkIn}</div>
                <div className='element'>{element.checkOut}</div>
                <div className='removebtn element' onClick={() => deleteItem(index)}>X</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CarRegistration