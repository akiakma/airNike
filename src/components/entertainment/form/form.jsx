import React, { useRef } from "react";
import styles from "./form.module.css";
import Button from "../button/button";

const Form = ({ cards, updateCard, deleteCard, FileInput }) => {
  const nameRef = useRef();
  const brandRef = useRef();
  const typeRef = useRef();
  const retailRef = useRef();
  const resaleRef = useRef();
  const howRef = useRef();
  const messageRef = useRef();

  const {
    name,
    brand,
    type,
    retail,
    resale,
    howtoget,
    message,
    fileName,
    fileURL,
  } = cards;

  const onFileChange = file => {
    updateCard({
      ...cards,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...cards,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = event => {
    deleteCard(cards);
  };

  return (
    <form className={styles.form}>
      <input
        className={`${styles.input} ${getStyles(type)}`}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        ref={nameRef}
      />
      <select
        className={`${styles.select} ${getStyles(type)}`}
        name="brand"
        value={brand}
        onChange={onChange}
        ref={brandRef}
      >
        <option value="Jordan1">Jordan1</option>
        <option value="Dunk">Dunk</option>
      </select>
      <select
        className={`${styles.select} ${getStyles(type)}`}
        name="type"
        value={type}
        onChange={onChange}
        ref={typeRef}
      >
        <option value="bronze">bronze</option>
        <option value="silver">silver</option>
        <option value="gold">gold</option>
      </select>
      <input
        className={`${styles.input} ${getStyles(type)}`}
        type="text"
        name="retail"
        value={retail}
        onChange={onChange}
        ref={retailRef}
      />
      <input
        className={`${styles.input} ${getStyles(type)}`}
        type="text"
        name="resale"
        value={resale}
        onChange={onChange}
        ref={resaleRef}
      />
      <select
        className={`${styles.select} ${getStyles(type)}`}
        name="howtoget"
        value={howtoget}
        onChange={onChange}
        ref={howRef}
      >
        <option value="retail">retail</option>
        <option value="resale">resale</option>
      </select>
      <textarea
        className={`${styles.textarea} ${getStyles(type)}`}
        name="message"
        value={message}
        onChange={onChange}
        ref={messageRef}
      ></textarea>
      <div className={styles.button}>
        <FileInput cards={cards} name={fileName} onFileChange={onFileChange} />
        <Button cards={cards.type} name="Delete" onClick={onSubmit} />
      </div>
    </form>
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
export default Form;
