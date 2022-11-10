import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from './MainNavigation.module.css';


function MainNavigation() {
  return (
    <Navbar bg="dark"  fixed="top" expand="lg" className={classes.container}>
        <Container>
            <Navbar.Brand className={classes.brand}>IceCube Digital</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark"/>
            <Navbar.Collapse className={classes.navbarCollapse}>
                <Nav className={classes.navItems}>
                    <Nav.Link style={{color:'white'}}>Home</Nav.Link>
                    <Nav.Link style={{color:'white'}}>Github</Nav.Link>
                    <Nav.Link style={{color:'white'}}>PortFolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>


    </Navbar>
//     <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
//     <a href="/" class="navbar-brand d-flex w-50 mr-auto">Navbar 3</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
//         <ul class="navbar-nav w-100 justify-content-center">
//             <li class="nav-item active">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="//codeply.com">Codeply</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//         </ul>
//         <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Right</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Right</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Right</a>
//             </li>
//         </ul>
//     </div>
// </nav>
  );
}
export default MainNavigation;
