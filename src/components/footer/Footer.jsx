import React from "react";
import styles from "../../styles/Footer.module.css";
// Importa los estilos de Font Awesome 5
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contFooter}>
        <p>&copy; TFG Grado de Ingeniería Informática</p>
        <a href="https://github.com/Luisotorres3/TFG_React">
          <i className="fab fa-github" style={{ fontSize: "24px" }}></i>
          Mi Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
