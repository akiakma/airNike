import React from "react";
import styles from "./button.module.css";

const Button = ({ cards, name, onClick }) => {
  return (
    <button
      className={`${styles.button} ${getStyles(cards)}`}
      onClick={onClick}
    >
      {name}
    </button>
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
export default Button;
