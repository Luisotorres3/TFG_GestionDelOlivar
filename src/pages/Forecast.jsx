import React from "react";
import styles from "../styles/Home.module.css";
export default function Forecast() {
  return (
    <>
      <div className={styles.homeCont}>
        Precipitaciones
        <section className={styles.section}>
          <h2>WWF History</h2>
          <p>
            The World Wide Fund for Nature (WWF) is an international
            organization working on issues regarding the conservation, research
            and restoration of the environment, formerly named the World
            Wildlife Fund. WWF was founded in 1961.
          </p>
        </section>        
      </div>
    </>
  );
}
