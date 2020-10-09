import React, { useState, useEffect } from "react";
import styles from "./body_second.module.css";

const BodySecond = props => {
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
    if (scrollTop > 240) {
      setResponse({ turnOn: true });
    } else if (scrollTop < 240) {
      setResponse({ turnOn: false });
    }
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.background}>
          {response.turnOn && (
            <div className={styles.left}>
              <div className={styles.leftdiv}>
                <div className={styles.leftdivchild}>
                  <h1 className={styles.h1tag}>All your favorite sneakers. </h1>
                  <p className={styles.ptag}>Our mission is what drives us</p>
                  <p className={styles.ptag}>
                    to do everything possible to expand human potential.
                  </p>
                  <p className={styles.ptag}>
                    Based in Beaverton, Oregon, NIKE, Inc.
                  </p>
                  <a
                    className={styles.atag}
                    href="https://about.nike.com/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                  >
                    {">"} More information
                  </a>
                </div>
              </div>
            </div>
          )}
          {response.turnOn && (
            <div className={styles.right}>
              <img
                className={styles.rightimg}
                src="./img/airdior1.png"
                alt="airdior"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BodySecond;
