import React from "react";
import styles from "./banner.module.css";

const Banner = props => {
  return (
    <>
      <img
        className={styles.img}
        src="https://i.postimg.cc/x13f4B8j/sbbg.jpg"
        alt="SBBackGround"
      />
      <div className={styles.banner}></div>
    </>
  );
};

export default Banner;
