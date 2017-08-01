import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'components/ui/shared/Link';

import { contactPage, aboutPath } from 'helpers/routes';

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
          <Link to={aboutPath()}>About</Link>
        </li>

        <li>
          <Link to={contactPage()}>Contact</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
