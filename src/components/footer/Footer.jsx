import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container d-flex justify-content-between">
        <p className="text-center">&copy; TFG Grado de Ingeniería Informática</p>
        <p className="text-right">Luis Soto Torres</p>
      </div>
    </footer>
  );
};

export default Footer;
