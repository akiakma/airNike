import React from "react";
import styles from "./banner.module.css";

const Banner = props => {
  return (
    <>
      <img className={styles.img} src="./img/boxbg.jpg" alt="SBBackGround" />
      <div className={styles.banner}></div>
    </>
  );
};

export default Banner;
