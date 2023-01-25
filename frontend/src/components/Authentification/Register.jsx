import React from 'react'
import { useState } from 'react'
import { Form, Button, Alert } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate =useNavigate()
  const [show,setShow]=useState(false)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   mobile: "",
  //   profesion: ""
  // })
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [mobile,setMobile] = useState("")
  const [profesion,setProfesion] = useState("")
  console.log(name)
  console.log(email)
  console.log(password)
  console.log(mobile)
  console.log(profesion)
 
  //register
  const collectData =async()=>{
   
    let data={name,email,password,mobile,profesion}
    console.log(data)
       let result= await axios.post("http://localhost:4000/api/v1/user/register",data)
       console.log(result.data);
       if(result.data.success){
       alert("user register successfully")
        
       }
  }

  return (
    <div>


      <div className='mt-5' style={{ display: "flex", justifyContent: "center" }}>
       
         <div class="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control value={name} type="text" placeholder="full name" onChange={(e)=>{
            
            setName(e.target.value)} }/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control value={mobile} type="text" placeholder="mobile number"  onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>profesion</Form.Label>
            <Form.Control value={profesion} type="text" placeholder="Profesion" onChange={(e)=>setProfesion(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check  type="checkbox" label="Check me out" />
          </Form.Group>

          <Button style={{ marginLeft: "90px" }} variant="primary" type="buton" onClick={collectData}>
            Submit
          </Button>
          </div>
      </div>
    </div>
  )
}

export default Register