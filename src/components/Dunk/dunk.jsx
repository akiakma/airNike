import React from "react";
import Nav from "../nav/nav";
import styles from "./dunk.module.css";

const Dunk = ({ authService }) => {
  return (
    <>
      <Nav authService={authService} />
      <div className={styles.div}>
        <div className={styles.card}>
          <img
            className={styles.avatar}
            src="https://i.postimg.cc/1RC0N1ms/STRANGELOVE.png"
            alt="profile photo"
          />
        </div>
      </div>
    </>
  );
};

export default Dunk;
