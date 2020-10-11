import React from "react";
import styles from "./item.module.css";

const Item = ({ data }) => {
  return (
    <>
      <>
        <div className={styles.container}>
          <img className={styles.img} src={data.url} alt="" />
          <div className={styles.name}>
            {data.name}
            <div className={styles.child}></div>
          </div>
          <div className={styles.line}>{data.line}</div>
          <div className={styles.date}>{data.date}</div>
        </div>
      </>
    </>
  );
};

export default Item;
