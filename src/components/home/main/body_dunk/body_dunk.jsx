import React, { useEffect, useState } from "react";
import styles from "./body_dunk.module.css";

const BodyDunk = props => {
  const [response, setResponse] = useState({
    turnOn: false,
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop);
    if (scrollTop > 800) {
      setResponse({ turnOn: true });
    } else if (scrollTop < 800) {
      setResponse({ turnOn: false });
    }
  };

  return (
    <>
      <div className={styles.body}>
        {response.turnOn && (
          <div className={styles.background}>
            <div className={styles.left}>
              <div>
                <img
                  className={styles.leftimg1}
                  src="./img/scottdunk.png"
                  alt="airdior"
                />
                <img
                  className={styles.leftimg2}
                  src="./img/chunky.png"
                  alt="airdior"
                />
                <img
                  className={styles.leftimg3}
                  src="./img/strangelove.png"
                  alt="airdior"
                />
              </div>
              <div>
                <img
                  className={styles.leftimg4}
                  src="./img/nikebox.png"
                  alt="airdior"
                />
                <img
                  className={styles.leftimg5}
                  src="./img/nikebox1.png"
                  alt="airdior"
                />
                <img
                  className={styles.leftimg6}
                  src="./img/nikebox2.png"
                  alt="airdior"
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightdiv}>
                <div className={styles.leftdivchild}>
                  <p className={styles.player}>Nike SB x Sustainability </p>
                  <p className={styles.ptag}>At Nike SB </p>
                  <p className={styles.ptag}>we're all about the progression</p>
                  <p className={styles.ptag}>of skateboarding</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BodyDunk;
