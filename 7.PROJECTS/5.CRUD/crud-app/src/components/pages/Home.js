import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { NavLink } from "react-router-dom"


// Home page

const Home = () => {
  const [students, setStudents] = useState([]);

  const [newStudent, setNewStudent] = useState({
    stu_name: "",
    email: ""
  });

  const [status, setStatus] = useState();

  function onTextChange(e) {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    })
    // console.log(newStudent);
  }

  async function OnFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3400/students", newStudent);
      setStatus(true);
    } catch (error) {
      console.log("Something is wrong.");
    }
  }
  useEffect(() => {
    getAllData();
  }, [])

  async function getAllData() {
    try {
      const students = await axios.get("http://localhost:3400/students");
      // console.log(students.data);
      setStudents(students.data);
    } catch (error) {
      console.log("Something is wrong.");
    }
  }
  if (status) {
    return <Home />
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3400/students/${id}`);

    let newStudent = students.filter((item) => {
      return item.id !== id;
    })
    setStudents(newStudent);
  }

  return (
    <>
      <div className='container-fluid border border-secondary  py-3 '>
        <div className='d-flex justify-content-center bg-success mb-1 text-white'>
          <h1>REACT CRUD OPERATION"S</h1>
        </div>

        <div className='row '>
          <div className='col-md-5 mt-2'>
            <Form className='bg-light px-2 py-2 border border-dark'>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="Text" placeholder="Student Name" name="stu_name" onChange={e => onTextChange(e)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => onTextChange(e)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit" className='col-4' onClick={e => OnFormSubmit(e)}>
                  ADD
                </Button>
              </div>
            </Form>
          </div>
          <div className='col-md-7  mt-2'>
            <Table striped className='bg-Secondary border border-primary px-2 '>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Student Name</th>
                  <th>Student Gmail</th>
                  <th>Action</th>
                </tr>
              </thead>

              {
                students.map((student, ind) => {
                  return (
                    <tbody>
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{student.stu_name}</td>
                        <td>{student.email}</td>
                        <td><NavLink to={`/view/${student.id}`}><VisibilityIcon /></NavLink>&nbsp;&nbsp;
                          <NavLink to={`/edit/${student.id}`}><EditIcon /></NavLink>&nbsp;
                          <DeleteIcon className='text-danger' onClick={() => handleDelete(student.id)} />
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              }

            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home