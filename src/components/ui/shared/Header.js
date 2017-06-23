import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Link from 'components/ui/shared/Link';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Blog</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
