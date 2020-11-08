import React, { useState, useRef } from "react";
import Nav from "../nav/nav";
import styles from "./jordan1.module.css";
import Banner from "../nav/banner/banner";
import List from "./list/list";
import { useSelector, useDispatch } from "react-redux";
import { selected, closeModal } from "./modules/jordan_item";
import Modal from "./modal";
import { useEffect } from "react";

const Jordan1 = ({ authService }) => {
  const imageUrl =
    "https://i.postimg.cc/TYmYw445/e9002f76513055-5c6c28e4b628a.jpg";
  const jordanData = useSelector(state => state.dataJordan);
  const selectData = useSelector(state => state.selectJordan);

  const dispatch = useDispatch();
  const onSelect = item => dispatch(selected(item));
  const onClose = () => dispatch(closeModal());

  const focusRef = useRef();

  const handleBackClick = () => {
    focusRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {selectData.select && (
        <div className={styles.modal}>
          <Modal selectData={selectData} />
        </div>
      )}
      <div
        className={styles.div}
        onClick={() => {
          if (selectData.select !== null) {
            onClose();
          }
        }}
        ref={focusRef}
      >
        <Nav authService={authService} />

        <Banner imageUrl={imageUrl} />
        <List
          data={jordanData}
          onSelect={onSelect}
          handleBackClick={handleBackClick}
        />
      </div>
    </>
  );
};

export default Jordan1;
