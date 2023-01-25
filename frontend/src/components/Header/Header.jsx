import React from 'react'
import "./Header.css"
import {Navbar,Container,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
function Header() {
  return (
   <>
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">CRUD</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link ><Link className='l' to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link className='l' to="/login">login</Link></Nav.Link>
            <Nav.Link ><Link  className='l'to="/register">register</Link></Nav.Link>
            <Nav.Link ><Link className='l' to="/logout">logout</Link></Nav.Link>
            
          
          </Nav>
        </Container>
      </Navbar>
   </>
  )
}

export default Header