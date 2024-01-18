import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../logoAceituna.png'; // Ajusta la ruta a tu logo
import styles from '../../styles/NavigationBar.module.css';

const NavigationBar = () => {
  // Utiliza useLocation para obtener la ubicación actual
  const location = useLocation();

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        {/* Agrega tu logo aquí */}
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <img
            src={Logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
          {' Gestión del Olivar'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/map"
              className={`${styles.navLink} ${
                location.pathname === '/map' ? styles.active : ''
              }`}
            >
              Mapa de Lindes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/treeCount"
              className={`${styles.navLink} ${
                location.pathname === '/treeCount' ? styles.active : ''
              }`}
            >
              Conteo de Olivos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/forecast"
              className={`${styles.navLink} ${
                location.pathname === '/forecast' ? styles.active : ''
              }`}
            >
              Precipitación esperada
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`${styles.navLink} ${
                location.pathname === '/about' ? styles.active : ''
              }`}
            >
              Sobre el proyecto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
