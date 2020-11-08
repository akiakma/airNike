import React from "react";
import styles from "./modal.module.css";
import { useState } from "react";

const Modal = ({ selectData }) => {
  const [range, setRange] = useState("0");
  const onChange = e => {
    setRange(e.target.value);
  };

  return (
    <div className={styles.div}>
      <div className={styles.imgDiv}>
        {selectData.select && selectData.select.range ? (
          <img
            className={styles.img}
            src={selectData.select.range[range]}
            alt="jordan"
          />
        ) : (
          <img
            className={styles.img}
            src={selectData.select && selectData.select.url}
            alt="jordan"
          />
        )}
        <input
          className={styles.input}
          type="range"
          value={range}
          min="0"
          max="35"
          onChange={onChange}
        />
        <div className={styles.description}>
          <div className={styles.left}>
            <div className={styles.style}>
              <p className={styles.ptag}>STYLE&nbsp;&nbsp;</p>{" "}
              {selectData.select.style}
            </div>
            <div className={styles.style}>
              <p className={styles.ptag}>RETAIL PRICE&nbsp;&nbsp;</p>
              {selectData.select.retailprice}
            </div>
            <div className={styles.style}>
              <p className={styles.ptag}>RELEASE DATE&nbsp;&nbsp;</p>
              {selectData.select.releasedate}
            </div>
          </div>
          <div className={styles.right}>{selectData.select.description}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

//{selectData.select.name}
