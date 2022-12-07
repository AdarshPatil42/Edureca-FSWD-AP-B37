import React from 'react';
import Form from 'react-bootstrap/Form';
import PalletizingImg from "../images/palletizing-img.png";

const Palletizing = () => {
  return (
    <div>
      <h4 className='title'>Project</h4>
      <div className='d-flex'>
      <div className='project-detail py-2 px-4'>
      <div className="mb-3">
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Box Grip: *</label>
      </Form.Floating>
      <Form.Label>The max number of products that can be lifted at once</Form.Label>
      </div>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="text"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Box Padding:</label>
      </Form.Floating>
      <Form.Label>Free space between products</Form.Label>
      </div>
      <div className='project-img'>
        <img src={PalletizingImg} alt ="img" className='img'></img>
      </div>
      </div>
    </div>
  )
}

export default Palletizing