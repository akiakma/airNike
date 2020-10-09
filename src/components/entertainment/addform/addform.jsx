import React, { useRef } from "react";
import styles from "./addform.module.css";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";

const AddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const brandRef = useRef();
  const typeRef = useRef();
  const retailRef = useRef();
  const resaleRef = useRef();
  const howRef = useRef();
  const messageRef = useRef();

  const onSubmit = event => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      brand: brandRef.current.value || "",
      type: typeRef.current.value,
      retail: retailRef.current.value || "",
      resale: resaleRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <>
      <form ref={formRef} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="name"
          ref={nameRef}
        />
        <select
          className={styles.select}
          name="brand"
          placeholder="brand"
          ref={brandRef}
        >
          <option value="Jordan1">Jordan1</option>
          <option value="Dunk">Dunk</option>
        </select>
        <select
          className={styles.select}
          name="type"
          placeholder="type"
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
          placeholder="RetailPrice"
          ref={retailRef}
        />
        <input
          className={styles.input}
          type="text"
          name="resale"
          placeholder="ResalePrice"
          ref={resaleRef}
        />
        <select
          className={styles.select}
          name="howtoget"
          placeholder="howtoget"
          ref={howRef}
        >
          <option value="retail">retail</option>
          <option value="resale">resale</option>
        </select>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="message"
          ref={messageRef}
        ></textarea>
        <ImageFileInput />

        <Button name="Add" onClick={onSubmit} />
      </form>
    </>
  );
};

export default AddForm;
