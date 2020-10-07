import React from "react";
import styles from "./nav.module.css";

const Nav = ({ props }) => (
  <div className={styles.nav}>
    <div className={styles.div}>
      <div className={styles.left}>
        <img className={styles.img} src="/img/logo_white.png" alt="nikelogo" />
        <div className={styles.leftDiv}>Home</div>
        <div className={styles.leftDiv}>Nike</div>
        <div className={styles.leftDiv}>Jordan 1</div>
        <div className={styles.leftDiv}>Dunk</div>
      </div>
      <div className={styles.right}>Log in</div>
    </div>
  </div>
);

export default Nav;
