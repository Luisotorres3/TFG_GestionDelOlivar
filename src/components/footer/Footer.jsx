import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container d-flex justify-content-between">
        <p>&copy; TFG Grado de Ingeniería Informática</p>        
      </div>
    </footer>
  );
};

export default Footer;
