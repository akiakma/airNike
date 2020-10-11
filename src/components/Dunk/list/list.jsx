import React from "react";
import styles from "./list.module.css";
import Item from "../item/item";

const List = ({ data }) => {
  return (
    <div className={styles.container}>
      {Object.keys(data).map(key => (
        <Item key={key} data={data[key]} />
      ))}
    </div>
  );
};

export default List;
