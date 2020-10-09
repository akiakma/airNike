import React, { useRef } from "react";
import styles from "./form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const Form = ({ cards, updateCard, deleteCard }) => {
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
    fileURL,
  } = cards;

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
  console.log(cards);
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        ref={nameRef}
      />
      <select
        className={styles.select}
        name="brand"
        value={brand}
        onChange={onChange}
        ref={brandRef}
      >
        <option value="Jordan1">Jordan1</option>
        <option value="Dunk">Dunk</option>
      </select>
      <select
        className={styles.select}
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
        className={styles.input}
        type="text"
        name="retail"
        value={retail}
        onChange={onChange}
        ref={retailRef}
      />
      <input
        className={styles.input}
        type="text"
        name="resale"
        value={resale}
        onChange={onChange}
        ref={resaleRef}
      />
      <select
        className={styles.select}
        name="howtoget"
        value={howtoget}
        onChange={onChange}
        ref={howRef}
      >
        <option value="retail">retail</option>
        <option value="resale">resale</option>
      </select>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
        ref={messageRef}
      ></textarea>
      <div className={styles.button}>
        <ImageFileInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default Form;
