import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Moments</Nav.Link>
          <Nav.Link href="#action2">Notifications</Nav.Link>
          <Nav.Link href="#action2">Messages</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Twitter"
            className="me-2 rounded-pill"
            aria-label="Search"
          />
          <Button variant="primary rounded-pill">Tweet</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBar