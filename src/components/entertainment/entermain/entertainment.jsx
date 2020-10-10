import React, { useState } from "react";
import styles from "./entertainment.module.css";
import Nav from "../../nav/nav";
import Maker from "../maker/maker";
import Preview from "../preview/preview";

const Entertainment = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Scott",
      brand: "Dunk",
      type: "gold",
      retail: "$120",
      resale: "$1900",
      howtoget: "resale",
      message: "just do it",
      fileName: "scott",
      fileURL: "https://i.postimg.cc/G2zFQZvP/TRAVISSCOTT.png",
    },
    2: {
      id: "2",
      name: "StrangeLove",
      brand: "Dunk",
      type: "bronze",
      retail: "$120",
      resale: "$1200",
      howtoget: "retail",
      message: "just do it",
      fileName: "scott",
      fileURL: "https://i.postimg.cc/1RC0N1ms/STRANGELOVE.png",
    },
    3: {
      id: "3",
      name: "BUCK",
      brand: "Dunk",
      type: "silver",
      retail: "$120",
      resale: "$700",
      howtoget: "resail",
      message: "just do it",
      fileName: "scott",
      fileURL: null,
    },
  });
  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Nav authService={authService} />
      <div className={styles.container}>
        <Maker
          FileInput={FileInput}
          cards={cards}
          addcard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default Entertainment;
