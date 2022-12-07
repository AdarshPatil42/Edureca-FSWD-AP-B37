import React from 'react';
import "./Project.css";
import Form from 'react-bootstrap/Form';
import ProjectImg from "../images/Project-img.png";

const Project = () => {
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
        <label htmlFor="floatingInputCustom">Name: *</label>
      </Form.Floating>
      <Form.Label>Project Name</Form.Label>
      </div>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="text"
          placeholder="Description"
        />
        <label htmlFor="floatingPasswordCustom">Description:</label>
      </Form.Floating>
      <Form.Label>Will be shown when choosing a pattern on the robot
      </Form.Label>
      </div>
      <div className='project-img'>
        <img src={ProjectImg} alt ="img" className='img'></img>
      </div>
      </div>
    </div>
  )
}

export default Project