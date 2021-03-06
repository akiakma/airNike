import React from "react";
import styles from "./main.module.css";
import Nav from "../../nav/nav";

import BodyFirst from "./body_first/body_first";
import BodySecond from "./body_second/body_second";

import BodyDunk from "./body_dunk/body_dunk";
import { useRef } from "react";
import { useEffect } from "react";

const Main = ({ authService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav authService={authService} />
      <div className={styles.main}>
        <BodyFirst />
        <BodySecond />
        <BodyDunk />
      </div>
    </>
  );
};

export default Main;
