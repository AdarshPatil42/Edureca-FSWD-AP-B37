import React, { useState, useEffect } from 'react'
import {Button, Table} from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const View = () => {
  const {id} = useParams();
  const [student, setStudent]= useState([]);
  const navigate = useNavigate();

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
    <div className='container-fluid border border-danger px-3 py-3 mx-2'>
      <div className='d-flex justify-content-center bg-info px-2 border mb-3 text-white'>
        <h2>Student's Details</h2>
      </div>

      <div className='col '>
            <Table striped className='bg-Secondary border border-primary px-2 '>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Student Name</th>
          <th>Student Gmail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{student.id}</td>
          <td>{student.stu_name}</td>
          <td>{student.email}</td>
          <td> <EditIcon/></td>
        </tr>
        
      </tbody>
    </Table>
    <div className='d-flex justify-content-center '>
    <Button variant="primary" type="submit" className='mt-5' onClick={handleClick}>
      Back to Home
    </Button>
    </div>
            </div>
    </div>
  )
}

export default View