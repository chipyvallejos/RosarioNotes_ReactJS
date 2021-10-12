import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./../CartWidget/CartWidget";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoH from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to={"/"}>
        <Navbar.Brand href="/home" className="font-weight-lighter">
          <img
            src={logoH}
            alt="logo"
            title="Home"
            width="30"
            height="30"
          />
          Rosario Notes
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/PCs">
              PC Escritorio
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to={"/category/Notes"}>
              Notebooks
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
