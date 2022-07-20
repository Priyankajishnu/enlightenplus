import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="/"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqw0WfXYPJgo_T-ocFah1NI_cp0IjVU7dkQ&usqp=CAU" alt='' style={{height:50,width:50}}></img> </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <br></br>
            <Nav.Link href="/wishlist"><i class="fa fa-heart" aria-hidden="true"></i>Wishlist</Nav.Link>
            <Nav.Link href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href='/login'>LOGIN</Nav.Link>
            <Nav.Link href='/register'>REGISTER</Nav.Link>
          </Nav>
        
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;