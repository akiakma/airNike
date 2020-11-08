import React from "react";
import styles from "./banner.module.css";

const Banner = ({imageUrl}) => {
  return (
    <>
      <img
        className={styles.img}
        src={imageUrl}
        alt="SBBackGround"
      />
      <div className={styles.banner}></div>
    </>
  );
};

export default Banner;
