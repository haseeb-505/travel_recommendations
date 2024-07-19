import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'; // Import Form
import Button from 'react-bootstrap/Button'; // Import Button
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from './Navigation2.module.css';
import logo_img from '../../images/travel_logo.jpeg';
// import Social_links from '../social_links/Social_links';
// import Home from '../Home_page/Home';
import { SearchContext } from '../SearchSuggestion/SearchContext';


const Navigation2 = () => {
  const {searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleSearchChange = (event) => {
    event.preventDefault();
    const searchValue = document.getElementById('search-button').value;
    setSearchQuery(searchValue);
  };

  return (
    <>
      <Navbar expand="lg" className={`${styles.Navbar} bg-body-tertiary`}>
      <Container fluid>
        <Image src={logo_img} className={`${styles.logo_img}`} width='50px' height="50px" alt="logo_image"></Image>
        <Navbar.Brand href="/" className={`${styles.title}`}>TravelBloom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className={`${styles.navToggle}`} />
        <Navbar.Collapse id="navbarScroll" className={`${styles.navToggle}`}>
          <Nav
            className={`${styles.LinkItems} me-auto my-2 my-lg-0`}
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link href="/home" className={`${styles.NavLink}`}>Home</Nav.Link>
              <Nav.Link href="/about" className={`${styles.NavLink}`}>About Us</Nav.Link>
              <NavDropdown title="Features" id="navbarScrollingDropdown" className={`${styles.NavLink}`}>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" className={`${styles.NavLink}`}>
                Contact Us
              </Nav.Link>
              <Nav.Link href="/signIn" className={`${styles.NavLink}`}>
                Sign In
              </Nav.Link>
              {/* <Nav.Link href="#" className={`${styles.NavLink}`}>
                Contact Us
              </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              id='search-button'
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={searchQuery}
              // onChange={handleSearchChange}
            />
            <Button variant="outline-success" className={`${styles.btnSearchClear}`} style={{margin: '0px 10px 0px 0px'}} >Search</Button>
            <Button variant="outline-danger" className={`${styles.btnSearchClear}`}>Claer</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <Social_links /> */} 
    {/* not needed here */}
  </>
  );
}

export default Navigation2;