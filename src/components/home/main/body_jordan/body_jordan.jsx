import React from "react";
import styles from "./body_jordan.module.css";

const BodyJordan = props => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.background}>
          <div className={styles.left}>
            <div className={styles.leftdiv}>
              <div className={styles.leftdivchild}>
                <p className={styles.ptag}>Believe in something.</p>
                <p className={styles.ptag}>
                  Even if it means sacrificing everything.
                </p>
                <p className={styles.player}> - Kaepernick </p>
              </div>
              <div className={styles.login}>Log in</div>
              <img
                className={styles.leftimg}
                src="./img/whiteswoosh.png"
                alt=""
              />
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

export default BodyJordan;
