import React from "react";
import styles from "./main.module.css";
import Nav from "../../nav/nav";

import BodyFirst from "./body_first/body_first";
import BodySecond from "./body_second/body_second";

import BodyDunk from "./body_dunk/body_dunk";

const Main = ({ authService }) => {
  return (
    <div className={styles.main}>
      <Nav authService={authService} />
      <BodyFirst />
      <BodySecond />
      <BodyDunk />
    </div>
  );
};

export default Main;
