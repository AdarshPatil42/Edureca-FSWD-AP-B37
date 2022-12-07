import React from 'react'
import Form from 'react-bootstrap/Form';
import ProductImg from "../images/product-img.png";

const Product = () => {
  return (
    <div>
      <h4 className='title'>Product</h4>
      <div className='d-flex'>
      <div className='project-detail py-2 px-4'>
      <div className="mb-3">
      <Form.Floating >
        <Form.Control
          id="floatingInputCustom"
          type="number"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Length: *</label>
      </Form.Floating>
      <Form.Label></Form.Label>
      </div>
      <div className='mb-3'>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Width:</label>
      </Form.Floating>
      <Form.Label></Form.Label>
      </div>
      <div className='mb-3'>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Height:</label>
      </Form.Floating>
      <Form.Label></Form.Label>
      </div>
      <div className='mb-3'>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="number"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Width:</label>
      </Form.Floating>
      <Form.Label></Form.Label>
      </div>
      </div>
      <div className='project-img'>
        <img src={ProductImg} alt ="img" className='img'></img>
      </div>
      </div>
    </div>
  )
}

export default Product