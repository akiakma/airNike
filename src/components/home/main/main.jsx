import React from "react";
import styles from "./main.module.css";
import Nav from "../../nav/nav";
import BodyJordan from "./body_jordan/body_jordan";
import BodySneakers from "./body_sneakers/body_sneakers";

const Main = props => (
  <div className={styles.main}>
    <Nav />
    <BodyJordan />
    <BodySneakers />
  </div>
);

export default Main;
