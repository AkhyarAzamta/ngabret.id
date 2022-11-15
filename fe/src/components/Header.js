import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../css/Header.module.css'

const Header = () => {

    const expand = 'md'
    const storeName = 'Ngabret.id'

  return (
    <>
        <Navbar expand={expand} className={["mb-3",styles.navBg]}>
          <Container fluid>
            <Navbar.Brand href="#" className={styles.navText}>{storeName}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className={styles.navBg}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {storeName}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={styles.navText}>Home</Nav.Link>
                  <Nav.Link href="#action2" className={styles.navText}>Contact</Nav.Link>
                  <Nav.Link href="#action3" className={styles.navText}>About</Nav.Link>
                </Nav>               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

export default Header