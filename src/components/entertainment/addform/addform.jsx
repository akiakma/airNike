import React, { useRef, useState } from "react";
import styles from "./addform.module.css";

import Button from "../button/button";

const AddForm = ({ onAdd, FileInput }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const brandRef = useRef();
  const typeRef = useRef();
  const retailRef = useRef();
  const resaleRef = useRef();
  const howRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
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
        <div className={styles.button}>
          <FileInput name={file.fileName} onFileChange={onFileChange} />
          <Button name="Add" onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default AddForm;
