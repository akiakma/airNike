import React from "react";
import Form from "../form/form";
import styles from "./maker.module.css";
import AddForm from "../addform/addform";
const Maker = ({ cards, addcard, updateCard, deleteCard, FileInput }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Maker</h1>
    {Object.keys(cards).map(key => (
      <Form
        key={key}
        FileInput={FileInput}
        cards={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <h1 className={styles.title}>Form</h1>
    <AddForm FileInput={FileInput} onAdd={addcard} />
  </section>
);

export default Maker;
