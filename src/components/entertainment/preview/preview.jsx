import React from "react";
import styles from "./preview.module.css";
import Card from "../card/card";
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map(key => (
        <Card key={key} cards={cards[key]} />
      ))}
    </ul>
  </section>
);

export default Preview;
