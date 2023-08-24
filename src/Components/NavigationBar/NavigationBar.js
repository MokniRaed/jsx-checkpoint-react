import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../logo.svg'
function NavigationBar({nav}) {

  console.log(nav);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={logo} alt="Logo" width={50} />
        <Nav className="me-auto">

          {nav.map(elm=>
          <Nav.Link >{elm}</Nav.Link>
          )}
        
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
