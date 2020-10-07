import React from "react";
import styles from "./body_sneakers.module.css";

const BodySneakers = props => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.background}>
          <div className={styles.left}>
            <div className={styles.leftdiv}>
              <div className={styles.leftdivchild}>
                <h1 className={styles.h1tag}>All your favortie sneakers. </h1>
                <p className={styles.ptag}>Our mission is what drives us</p>
                <p className={styles.ptag}>
                  to do everything possible to expand human potential.
                </p>
                <p className={styles.ptag}>
                  Based in Beaverton, Oregon, NIKE, Inc.
                </p>
                <a
                  className={styles.atag}
                  href="http://www.naver.com"
                  target="_blank"
                >
                  > More information
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.rightimg}
              src="./img/airdior1.png"
              alt="airdior"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySneakers;
