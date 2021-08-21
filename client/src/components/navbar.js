import { Link } from 'react-router-dom';
import { Nav, NavbarBrand as Brand } from 'react-bootstrap';


const Navbar = () =>{
    return (
        <div bg="light" variant="light">
        <container>
        <Brand to="/home">Logo</Brand>
        <Nav className="me-auto">
          <Link to="/home">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">profile</Link>
        </Nav>
        </container>
      </div>
    )
}

export default Navbar;