import React from 'react'
import PalletImg from "../images/Pallet-img.png";
import Form from 'react-bootstrap/Form';

const Pallet = () => {
  return (
    <div>
      <h4 className='title'>Pallet</h4>
      <div className='d-flex'>
      <div className='project-detail py-2 px-4'>
      <div className="mb-3">
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Standand Pallet: *</label>
      </Form.Floating>
      <Form.Label>Optional: Choose a standard pallet</Form.Label>
      </div>

      <div className='d-flex justify-content-between  mb-3'>
      <div style={{width:"30%"}}>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Length:</label>
      </Form.Floating>
      </div>

      <div style={{width:"30%"}}>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Width:</label>
      </Form.Floating>
      </div>

      <div style={{width:"30%"}}>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Height:</label>
      </Form.Floating>
      </div>
      </div>

      <div className='mb-3'>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Layer:</label>
      </Form.Floating>
      <Form.Label>Total no. of layers</Form.Label>
      </div>
      <div className='mb-3'>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Pallet load Height:</label>
      </Form.Floating>
      <Form.Label>Pallet load height when finished</Form.Label>
      </div>
      </div>
      <div className='project-img'>
        <img src={PalletImg} alt ="img" className='img'></img>
      </div>
      </div>
    </div>
  )
}

export default Pallet