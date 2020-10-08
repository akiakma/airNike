import React from "react";
import styles from "./body_first.module.css";

const BodyFirst = props => {
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
            </div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.rightimg}
              src="./img/swooshnike.png"
              alt="airdior"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyFirst;
