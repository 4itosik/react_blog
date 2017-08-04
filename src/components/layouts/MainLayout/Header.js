import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'components/ui/shared/Link';

import { contactPage, aboutPath, createPostPath } from 'helpers/routes';

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
        <li active={false}>
          <Link to={aboutPath()}>About</Link>
        </li>

        <li active={false}>
          <Link to={contactPage()}>Contact</Link>
        </li>

        <li active={false}>
          <Link to={createPostPath()}>Create New post</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
