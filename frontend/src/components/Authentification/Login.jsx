import React, { useState } from 'react'
import "./Auth.css"
import {Form,Button} from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate=useNavigate()
  const login =async()=>{
   
    let data={email,password}
    console.log(data)
       let result= await axios.post("http://localhost:4000/api/v1/user/login",data)
       console.log(result.data);
       if(result.data.success){
        navigate('/')
       }
  }

  return (
    <div className='mt-5' style={{display:"flex",justifyContent:"center"}}>
      <div className='form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="password" placeholder="Enter email "  onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button style={{ marginLeft: "90px" }} variant="primary" type="buton" onClick={login}>
          Submit
        </Button>
        </div>
    </div>
  )
}

export default Login