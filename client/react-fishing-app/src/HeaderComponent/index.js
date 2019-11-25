import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';
// import { Header, List, Menu } from 'semantic-ui-react';


const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/posts">Foam is the Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/posts">River Journal</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/about">About Foam is the Home</Nav.Link>
      <Nav.Link href="/login">Log Out</Nav.Link>
    </Nav>
  </Navbar>

  )
}
export default HeaderComponent;