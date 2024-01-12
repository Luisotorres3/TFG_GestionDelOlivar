import React from "react";
import styles from "../styles/TreeCount.module.css";
export default function TreeCount() {
  return (
    <>
      <div className={styles.treeCont}>
        Conteo De Olivos
        <div className={styles.imgCont}>
          <img
            src={require('../images/img1.png')}
            alt="img1"
          />
          <div className={styles.textCont}>
            <table border="1">
              <thead>
                <tr>
                  <th>Número de hileras</th>
                  <th>Número de olivos</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Fila 1, Celda 1</td>
                  <td>Fila 1, Celda 2</td>
                </tr>
                <tr>
                  <td>Fila 2, Celda 1</td>
                  <td>Fila 2, Celda 2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img
            src={require('../images/img2.png')}
            alt="img2"
          />
        </div>
        <button>PROCESAR IMAGEN</button>
      </div>
    </>
  );
}
