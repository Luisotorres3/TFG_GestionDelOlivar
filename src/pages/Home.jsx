import React from "react";
import styles from "../styles/Home.module.css";
export default function Home() {

  return (
    <>
      <div className={styles.homeCont}>
        <div className={styles.firstDiv}>
          <div className={styles.firstDiv2}>
            <h2>
              Hola, bienvenidos al TFG de{" "}
              <a href="https://luisotorres3.github.io/TFG_GestionDelOlivar">
                Luis Soto Torres
              </a>
            </h2>
            <p>
              En esta web encontraremos funcionalidades muy diversas que ayudan
              y mejoran el estudio y control de los terrenos olivareros.
              Pudiendo a su vez ser usado para cualquier tipo de terreno que
              contenga árboles.
            </p>
          </div>
          <div className={styles.firstDiv3}>
            <div className={styles.firstDiv4}>
              <h3>
                <i class="fa fa-map-marker" aria-hidden="true"></i>Mapa
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className={styles.arrowButton} href="/map">
                <span className={styles.arrowContainer}>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className={styles.firstDiv4}>
              <h3>
              <i class="fa fa-calculator" aria-hidden="true"></i>Algoritmo de Conteo
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className={styles.arrowButton} href="/treeCount">
                <span className={styles.arrowContainer}>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className={styles.firstDiv4}>
              <h3>
                <i class="fa fa-tint" aria-hidden="true"></i>Ánálisis de Lluvias
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a className={styles.arrowButton} href="/forecast">
                <span className={styles.arrowContainer}>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
