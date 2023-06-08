import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    < >
     
      
      <Navbar bg="primary" variant="dark" style={{maxWidth:'2000px'}}>
        <Container>
          <Navbar.Brand href="#home" className='fs-3'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"className='text-white fs-3'>Home</Nav.Link>
            <Nav.Link href="#features"className='text-white fs-3'>Features</Nav.Link>
            <Nav.Link href="#pricing"className='text-white fs-3'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;