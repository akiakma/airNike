import React from "react";
import Form from "../form/form";
import styles from "./maker.module.css";
import AddForm from "../addform/addform";
const Maker = ({ cards, addcard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Maker</h1>
    {Object.keys(cards).map(key => (
      <Form
        key={key}
        cards={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <h1 className={styles.title}>Form</h1>
    <AddForm onAdd={addcard} />
  </section>
);

export default Maker;
