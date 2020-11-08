import React, { useState, useEffect } from "react";
import Nav from "../nav/nav";
import styles from "./dunk.module.css";
import Banner from "../nav/banner/banner";
import List from "./list/list";
import "@fortawesome/fontawesome-free/js/all.js";

const Dunk = ({ authService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([
    {
      name: "Supreme Black Cement",
      line: "Nike SB",
      date: `JAN '02`,
      url: "https://i.postimg.cc/B60H6JWs/BLACKCEMENT.png",
      value: 3000,
    },
    {
      name: "Travis Scott",
      line: "Nike SB",
      date: `MAR '20`,
      url: "https://i.postimg.cc/g0R3mnTN/TRAVISSCOTT.png",
      value: 2000,
    },
    {
      name: "Strange Love",
      line: "Nike SB",
      date: `MAR '20`,
      url: "https://i.postimg.cc/tRDWq0BQ/STRANGELOVE.png",
      value: 2000,
    },
    {
      name: "Chunky Dunky",
      line: "Nike SB",
      date: `June '20`,
      url: "https://i.postimg.cc/4dQtHjZc/CHUNKYDUNKY.png",
      value: 2000,
    },
    {
      name: "BUCK",
      line: "Nike SB",
      date: `MAR '04`,
      url: "https://i.postimg.cc/6q6Zrz5m/BUCK.png",
      value: 800,
    },
    {
      name: "STUSSY",
      line: "Nike SB",
      date: `MAR '08`,
      url: "https://i.postimg.cc/4y89BtYN/STUSSY.png",
      value: 2000,
    },
    {
      name: "Supreme Red Cement",
      line: "Nike SB",
      date: `MAR '02`,
      url: "https://i.postimg.cc/vTT07CM4/REDCEMENT.png",
      value: 2000,
    },
    {
      name: "PIGEON",
      line: "Nike SB",
      date: `June '05`,
      url:
        "https://i.postimg.cc/fTBBqzkJ/2020-10-11-11-23-39-removebg-preview.png",
      value: 2000,
    },
    {
      name: "HEINEKEN",
      line: "Nike SB",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/PxRR7dSW/2020-10-11-11-16-29-removebg-preview.png",
      value: 800,
    },
    {
      name: "TOKYO",
      line: "Nike SB",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/xCCZgX3j/2020-10-11-11-16-35-removebg-preview.png",
      value: 2000,
    },
    {
      name: "LONDON",
      line: "Nike SB",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/MGt4y7Rr/2020-10-11-11-16-45-removebg-preview.png",
      value: 2000,
    },
    {
      name: "SUPA",
      line: "Nike SB",
      date: `MAR '02`,
      url:
        "https://i.postimg.cc/zfMQtJtn/2020-10-11-11-16-57-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Tweed Pack",
      line: "Nike SB",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/G2y56ZV6/2020-10-11-11-16-51-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Offwhite X Michigan",
      line: "Nike SB",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/28KnBVVF/2020-10-11-11-28-04-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Kentucky",
      line: "Nike SB",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/wjRL5gNK/2020-10-11-11-27-56-removebg-preview.png",
      value: 2000,
    },
  ]);
  const [info, setInfo] = useState([
    {
      name: "Supreme Black Cement",
      line: "Nike SB",
      date: `JAN '02`,
      url: "https://i.postimg.cc/B60H6JWs/BLACKCEMENT.png",
      value: 3000,
    },
    {
      name: "Travis Scott",
      line: "Nike SB",
      date: `MAR '20`,
      url: "https://i.postimg.cc/g0R3mnTN/TRAVISSCOTT.png",
      value: 2000,
    },
    {
      name: "Strange Love",
      line: "Nike SB",
      date: `MAR '20`,
      url: "https://i.postimg.cc/tRDWq0BQ/STRANGELOVE.png",
      value: 2000,
    },
    {
      name: "Chunky Dunky",
      line: "Nike SB",
      date: `June '20`,
      url: "https://i.postimg.cc/4dQtHjZc/CHUNKYDUNKY.png",
      value: 2000,
    },
    {
      name: "BUCK",
      line: "Nike SB",
      date: `MAR '04`,
      url: "https://i.postimg.cc/6q6Zrz5m/BUCK.png",
      value: 800,
    },
    {
      name: "STUSSY",
      line: "Nike SB",
      date: `MAR '08`,
      url: "https://i.postimg.cc/4y89BtYN/STUSSY.png",
      value: 2000,
    },
    {
      name: "Supreme Red Cement",
      line: "Nike SB",
      date: `MAR '02`,
      url: "https://i.postimg.cc/vTT07CM4/REDCEMENT.png",
      value: 2000,
    },
    {
      name: "PIGEON",
      line: "Nike SB",
      date: `June '05`,
      url:
        "https://i.postimg.cc/fTBBqzkJ/2020-10-11-11-23-39-removebg-preview.png",
      value: 2000,
    },
    {
      name: "HEINEKEN",
      line: "Nike SB",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/PxRR7dSW/2020-10-11-11-16-29-removebg-preview.png",
      value: 800,
    },
    {
      name: "TOKYO",
      line: "Nike SB",
      date: `MAR '05`,
      url:
        "https://i.postimg.cc/xCCZgX3j/2020-10-11-11-16-35-removebg-preview.png",
      value: 2000,
    },
    {
      name: "LONDON",
      line: "Nike SB",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/MGt4y7Rr/2020-10-11-11-16-45-removebg-preview.png",
      value: 2000,
    },
    {
      name: "SUPA",
      line: "Nike SB",
      date: `MAR '02`,
      url:
        "https://i.postimg.cc/zfMQtJtn/2020-10-11-11-16-57-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Tweed Pack",
      line: "Nike SB",
      date: `MAR '04`,
      url:
        "https://i.postimg.cc/G2y56ZV6/2020-10-11-11-16-51-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Offwhite X Michigan",
      line: "Nike SB",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/28KnBVVF/2020-10-11-11-28-04-removebg-preview.png",
      value: 2000,
    },
    {
      name: "Kentucky",
      line: "Nike SB",
      date: `MAR '20`,
      url:
        "https://i.postimg.cc/wjRL5gNK/2020-10-11-11-27-56-removebg-preview.png",
      value: 2000,
    },
  ]);

  const onChange = event => {
    const value = event.currentTarget.value;
    const result = data.filter(item => item.name.toLowerCase().includes(value));
    setInfo(result);
  };
  const imageUrl = "https://i.postimg.cc/x13f4B8j/sbbg.jpg";
  return (
    <>
      <Nav authService={authService} />
      <div className={styles.container}>
        <Banner imageUrl={imageUrl} />
        <div className={styles.div} type="text">
          <div className={styles.searchlogo}>
            <i class="fas fa-search"></i>
          </div>
          <input
            className={styles.input}
            onChange={onChange}
            type="text"
          ></input>
        </div>
        <List data={info} />
      </div>
    </>
  );
};

export default Dunk;
