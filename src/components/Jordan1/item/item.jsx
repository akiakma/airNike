import React from "react";
import styles from "./item.module.css";

const Item = ({ data, onSelect, handleBackClick }) => {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={data.url}
          alt="img"
          onClick={() => {
            handleBackClick();
            onSelect(data);
          }}
        />
        <div className={styles.name}>{data.name}</div>
        <div className={styles.line}>{data.line}</div>
        <div className={styles.date}>{data.date}</div>
      </div>
    </>
  );
};

export default Item;
