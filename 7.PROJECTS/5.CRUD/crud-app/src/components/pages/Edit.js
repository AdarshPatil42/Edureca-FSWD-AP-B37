import React, { useState } from 'react'
import {Button, Form,FloatingLabel, Col, Row} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const{id} = useParams();
  const navigate = useNavigate();
  const[student,setStudent]=useState({
    stu_name:"",
    email:""
  });

  useEffect(()=>{
    async function getStudent(){
      try{
        const student = await axios.get(`http://localhost:3400/students/${id}`);
        // console.log(student.data);
        setStudent(student.data);
      }catch(error){
        console.log("Something is wrong.");
      }
    }

    getStudent();
  },[id])

  function handleClick(){
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
          <Form.Control type="number" placeholder="00" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Student Name">
          <Form.Control type="Text" placeholder="Name" />
        </FloatingLabel>
      </Col>
    </Row>
    
    <Row className="g-2 mb-3">
    <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
    </Row>

    <div className='d-flex justify-content-center '>
    <Button variant="success" type="submit" className='me-2'>
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