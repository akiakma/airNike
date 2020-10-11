import React, { useState, useEffect } from "react";
import styles from "./entertainment.module.css";
import Nav from "../../nav/nav";
import Maker from "../maker/maker";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";

const Entertainment = ({ authService, FileInput, cardRepository }) => {
  const historyState = useHistory().state;
  const history = useHistory();

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };
  console.log(historyState);

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });
  return (
    <>
      <Nav authService={authService} />
      <section className={styles.maker}>
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
    </>
  );
};

export default Entertainment;
