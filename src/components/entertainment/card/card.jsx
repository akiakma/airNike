/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./card.module.css";

const DEAFULT_IMAGE = "./img/nikebox.png";

const Card = ({ cards }) => {
  const {
    name,
    brand,
    type,
    retail,
    resale,
    howtoget,
    message,
    fileURL,
  } = cards;

  const url = fileURL || DEAFULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(type)}`}>
      <img className={styles.avatar} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{brand}</p>
        <p className={styles.title}>Retail:{retail}</p>
        <p className={styles.email}>how to get?: {howtoget}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(type) {
  switch (type) {
    case "bronze":
      return styles.bronze;
    case "silver":
      return styles.silver;
    case "gold":
      return styles.gold;
    // default:
    //   throw new Error(`unknown theme: ${type}`);
  }
}
export default Card;
