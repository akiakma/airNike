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
                  src="https://i.postimg.cc/VLLPN5kw/scottdunk.png"
                  alt="scottdunk"
                />
                <img
                  className={styles.leftimg2}
                  src="https://i.postimg.cc/CLPTnYRq/chunky.png"
                  alt="chunkydunky"
                />
                <img
                  className={styles.leftimg3}
                  src="https://i.postimg.cc/sxGSP3Vg/strangelove.png"
                  alt="strangelove"
                />
              </div>
              <div>
                <img
                  className={styles.leftimg4}
                  src="https://i.postimg.cc/NFbh4vbZ/nikebox.png"
                  alt="box1"
                />
                <img
                  className={styles.leftimg5}
                  src="https://i.postimg.cc/DZr3SXGv/nikebox1.png"
                  alt="box2"
                />
                <img
                  className={styles.leftimg6}
                  src="https://i.postimg.cc/T1TMg3jr/nikebox2.png"
                  alt="box3"
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
