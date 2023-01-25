import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from 'react-router-dom'



function Update() {
    const navigate=useNavigate()
    const params=useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [profesion, setProfesion] = useState("")

    useEffect(()=>{
        const patchvalues =async()=>{
            try{
                let result =await axios.get(`http://localhost:4000/api/v1/user/${params.id}`)
                setName(result.data.user.name)
                setEmail(result.data.user.email)
             //    setPassword(result.data.user.password)
                setMobile(result.data.user.mobile)
                setProfesion(result.data.user.profesion)
       
            }catch(err){
                console.log(err)
            }
          
        }
        patchvalues()
    },[])

    const updateData=async()=>{
        let result =await axios.put(`http://localhost:4000/api/v1/user/${params.id}`,{name,email,mobile,profesion})
       
        if(result.data.success){
            navigate('/')
         }
    }

    return (
        <div>
            <div className='mt-5' style={{ display: "flex", justifyContent: "center" }}>

                <div class="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control value={name} type="text" placeholder="Full name" onChange={(e) => {

                            setName(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Enter email " onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control value={mobile} type="text" placeholder="Password" onChange={(e) => setMobile(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>profesion</Form.Label>
                        <Form.Control value={profesion} type="text" placeholder="Profesion" onChange={(e) => setProfesion(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button style={{ marginLeft: "90px" }} variant="primary" type="buton" onClick={updateData} >
                        Update
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Update