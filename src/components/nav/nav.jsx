import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom";
import { storage } from "firebase";

const Nav = ({ authService }) => {
  const [turn, setTurn] = useState("");
  const history = useHistory();
  const login = () => {
    history.push("/login");
  };
  const logout = () => {
    sessionStorage.removeItem("id");
    setTurn("1");
    authService.logOut();
    history.push("/");
  };
  // useEffect(() => {
  //   authService.onAuthChange(user => {
  //     if (!user) {
  //       history.push("/");
  //     }
  //   });
  // });

  return (
    <>
      {sessionStorage.id ? (
        <div className={styles.nav}>
          <div className={styles.div}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src="/img/logo_white.png"
                alt="nikelogo"
              />
              <div className={styles.leftDiv}>Home</div>
              <div className={styles.leftDiv}>Jordan 1</div>
              <div className={styles.leftDiv}>Dunk</div>
              <div className={styles.leftDiv}>Entertainment</div>
            </div>
            <div onClick={logout} className={styles.right}>
              Log out
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nav}>
          <div className={styles.div}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src="/img/logo_white.png"
                alt="nikelogo"
              />
              <div className={styles.leftDiv}>Home</div>
              <div className={styles.leftDiv}>Jordan 1</div>
              <div className={styles.leftDiv}>Dunk</div>
            </div>
            <div onClick={login} className={styles.right}>
              Log in
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

// {
//   <div className={styles.nav}>
// <div className={styles.div}>
//   <div className={styles.left}>
//     <img
//       className={styles.img}
//       src="/img/logo_white.png"
//       alt="nikelogo"
//     />
//     <div className={styles.leftDiv}>Home</div>
//     <div className={styles.leftDiv}>Nike</div>
//     <div className={styles.leftDiv}>Jordan 1</div>
//     <div className={styles.leftDiv}>Dunk</div>
//   </div>
//   <div className={styles.right}>Log in</div>
// </div>
// </div>
// }
