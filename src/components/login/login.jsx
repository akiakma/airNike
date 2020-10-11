import React, { useEffect } from "react";
import styles from "./login.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { useHistory } from "react-router-dom";
const Login = ({ authService }) => {
  const history = useHistory();

  const loggedIn = userId => {
    sessionStorage.setItem("id", userId);
    history.push({
      pathname: "/airNike",
      state: { id: userId },
    });
  };
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => loggedIn(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && loggedIn(user.uid);
    });
  });

  useEffect(() => {
    console.log(sessionStorage);
  });
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <img className={styles.headerImg} src="./img/greynike.png" alt="" />
        <h1 className={styles.h1}>Sign up or log in</h1>
      </header>
      <body className={styles.body}>
        <div className={styles.inputField}>
          <label className={styles.inputFieldDiv}>
            This field is required.
          </label>
          <input
            type="text"
            placeholder="Enter your email or username"
            className={styles.inputFieldInput}
            readOnly
          ></input>
          <button className={styles.inputFieldButton}>Continue</button>
        </div>
        <div className={styles.betweenInputButton}>or continue with</div>
        <div className={styles.buttonField}>
          <button className={styles.bottomButton} onClick={onLogin}>
            <div className={styles.fagoogle}>
              <i class="fab fa-google"></i>
            </div>
            <div className={styles.google}>Google</div>
          </button>
          <button className={styles.bottomButton} onClick={onLogin}>
            <div className={styles.fagithub}>
              <i class="fab fa-github"></i>
            </div>
            <div className={styles.github}>Github</div>
          </button>
          <button className={styles.bottomButton} onClick={onLogin}>
            <div className={styles.fafacebook}>
              <i class="fab fa-facebook"></i>
            </div>
            <div className={styles.facebook}>Facebook</div>
          </button>
        </div>
      </body>
    </div>
  );
};

export default Login;
