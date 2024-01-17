import React from "react";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.homeCont}>
        <div className={styles.firstDiv}>
          <div className={styles.firstDiv2}>LOREM IPSUM</div>
          <div className={styles.firstDiv3}>
            <div className={styles.firstDiv4}>
              <img src={require("../images/img1.png")} alt="img1" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className={styles.firstDiv4}>
              <img src={require("../images/img1.png")} alt="img1" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div><div className={styles.firstDiv4}>
              <img src={require("../images/img1.png")} alt="img1" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
