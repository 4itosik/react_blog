import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Blog</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="#">Posts</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
