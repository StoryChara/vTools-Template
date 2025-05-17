import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-section">
          <i className="fa-solid fa-star fa-flip-horizontal"></i>
          <span className="logo-text">vTools Preview</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;