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
                <p className={styles.player}> PURPOSE MOVES US </p>
                <p className={styles.ptag}>Our purpose is to unite the world</p>
                <p className={styles.ptag}>through sport to create a healthy</p>
                <p className={styles.ptag}>planet, active communities and an</p>
                <p className={styles.ptag}>equal playing field for all.</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.rightimg}
              src="https://i.postimg.cc/h40qgVgM/whiteswoosh.png"
              alt="nikeswoosh"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyFirst;
