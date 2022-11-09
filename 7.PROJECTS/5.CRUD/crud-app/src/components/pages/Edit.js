import React, { useState, useEffect } from 'react'
import { Button, Form, FloatingLabel, Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// edit page
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateStudent, setUpdateStudent] = useState({
    stu_name: "",
    email: ""
  });

  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3400/students/${id}`);
        // console.log(student.data);
        setUpdateStudent(student.data);
      } catch (error) {
        console.log("Something is wrong.");
      }
    }
    getStudent();
  }, [id])

  async function OnFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3400/students/${id}`, updateStudent);

    } catch (error) {
      console.log("Something is wrong.");
    }
    navigate("/");
  }

  function onTextChange(e) {
    setUpdateStudent({
      ...updateStudent,
      [e.target.name]: e.target.value
    })
    // console.log(newStudent);
  }

  function handleClick() {
    navigate("/");
  }
  return (
    <div className='container border border-danger px-3 py-3'>
      <div className='d-flex justify-content-center bg-info px-2 border mb-3 text-white'>
        <h2>Edit Details</h2>
      </div>

      <Row className="g-2 mb-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Student ID">
            <Form.Control type="number" placeholder="00" value={id} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Student Name">
            <Form.Control type="Text" name="stu_name" value={updateStudent.stu_name}
              onChange={e => onTextChange(e)} />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="g-2 mb-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" name="email" value={updateStudent.email}
              onChange={e => onTextChange(e)} />
          </FloatingLabel>
        </Col>
      </Row>

      <div className='d-flex justify-content-center '>
        <Button variant="success" type="submit" className='me-2' onClick={(e) => OnFormSubmit(e)}>
          UPDATE
        </Button>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default Edit