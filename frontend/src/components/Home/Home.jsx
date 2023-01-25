import React from 'react'
import "./Home.css"
import { Button, Card, Row, Col, Container } from "react-bootstrap"
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { FaUserEdit, FaWindowClose, FaUserTie } from "react-icons/fa"
function Home() {
  const [users, setUsers] = useState([])
   

  useEffect(() => {

    getDatas()
  }, [])
  const getDatas = async () => {
    let result = await axios.get("http://localhost:4000/api/v1/users")
    console.log(result.data.users);
    setUsers(result.data.users)
  }

  const deleteData = async (id) => {

    let data = await axios.delete(`http://localhost:4000/api/v1/user/${id}`)
    getDatas()
    //  if(data.data.success){
    //   alert(data.data.message)
    //  }
  }

  // const editData=()=>{

  // }


  return (
    <div>
      <Container>
        <h5 className='mt-5'>Users</h5>
        <Row className='mt-4'>
          {
            users.map((user) => (
              <Col className='mt-4' md={3}>
                <Card className='p-2' style={{ width: '18rem', textAlign: "center" }}>
                  <Card.Body>
                    <div><FaUserTie style={{ fontSize: "36px" }}></FaUserTie></div>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.mobile}</Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted"> <mark>{user.profesion}</mark></Card.Subtitle>
                    <div className='mt-3'>
                      <Card.Link ><Button className='btn-sm ' variant='outline-danger' onClick={() => { deleteData(user._id) }}><FaWindowClose></FaWindowClose></Button></Card.Link>
                      <Card.Link ><Button variant="outline-primary" className='btn-sm '><Link to={`/update/${user._id}`}><FaUserEdit></FaUserEdit></Link></Button></Card.Link>
                    </div>


                  </Card.Body>
                </Card>
              </Col>
            ))
          }



        </Row>
      </Container>




    </div>
  )
}

export default Home