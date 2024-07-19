import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navigation2.module.css';
import logo_img from '../../images/travel_logo.jpeg';

const Navigation2 = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery.toLowerCase()}`);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearchQuery('');
  };

  return (
    <>
      <Navbar expand="lg" className={`${styles.Navbar} bg-body-tertiary`}>
        <Container fluid>
          <Image src={logo_img} className={`${styles.logo_img}`} width='50px' height="50px" alt="logo_image" />
          <Navbar.Brand href="/" className={`${styles.title}`}>TravelBloom</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navToggle}`} />
          <Navbar.Collapse id="navbarScroll" className={`${styles.navToggle}`}>
            <Nav className={`${styles.LinkItems} me-auto my-2 my-lg-0`} navbarScroll>
              <Nav.Link href="/home" className={`${styles.NavLink}`}>Home</Nav.Link>
              <Nav.Link href="/about" className={`${styles.NavLink}`}>About Us</Nav.Link>
              <NavDropdown title="Features" id="navbarScrollingDropdown" className={`${styles.NavLink}`}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" className={`${styles.NavLink}`}>Contact Us</Nav.Link>
              <Nav.Link href="/signIn" className={`${styles.NavLink}`}>Sign In</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                id="search-input"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" id='search-button' type="submit" className={`${styles.btnSearchClear}`} style={{ margin: '0px 10px 0px 0px' }}>Search</Button>
              <Button variant="outline-danger" id='clear-button' onClick={handleClear} className={`${styles.btnSearchClear}`}>Clear</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation2;
