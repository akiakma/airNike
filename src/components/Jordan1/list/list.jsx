import React from "react";
import styles from "./list.module.css";
import Item from "../item/item";

const List = ({ data, onSelect, handleBackClick }) => {
  return (
    <div className={styles.container}>
      {Object.keys(data).map(key => (
        <Item
          key={key}
          data={data[key]}
          onSelect={onSelect}
          handleBackClick={handleBackClick}
        />
      ))}
    </div>
  );
};

export default List;
