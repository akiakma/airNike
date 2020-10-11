import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Nav = ({ authService }) => {
  // eslint-disable-next-line no-unused-vars
  const [turn, setTurn] = useState("");
  const history = useHistory();
  const login = () => {
    history.push("/login");
  };
  const goHome = () => {
    history.push("/airNike");
  };
  const goJordan1 = () => {
    history.push("/jordan1");
  };
  const goDunk = () => {
    history.push("/dunk");
  };
  const goEntertainment = () => {
    history.push("/entertainment");
  };
  const logout = () => {
    sessionStorage.removeItem("id");
    setTurn("1");
    authService.logOut();
    history.push("/airNike");
  };

  const [logo, setLogo] = useState(
    "https://i.postimg.cc/h4Ntz9Nn/logo-white.png"
  );
  const [isHome, setIsHome] = useState(false);
  const [isJordan, setIsJordan] = useState(false);
  const [isDunk, setIsDunk] = useState(false);
  const [isEntertainment, setIsEntertainment] = useState(false);
  useEffect(() => {
    if (history.location.pathname === "/") {
      setIsHome(true);
      setLogo("/img/logo_white.png");
    } else if (history.location.pathname === "/jordan1") {
      setIsJordan(true);
      setLogo("/img/logo_white.png");
    } else if (history.location.pathname === "/dunk") {
      setIsDunk(true);
      setLogo("https://www.nikesb.com/icons/nav/logo_nikesb_White.svg");
    } else if (history.location.pathname === "/entertainment") {
      setIsEntertainment(true);
    }
  }, []);

  return (
    <>
      {sessionStorage.id ? (
        <div className={styles.nav}>
          <div className={styles.div}>
            <div className={styles.left}>
              <img className={styles.img} src={logo} alt="nikelogo" />
              <div onClick={goHome} className={cx("leftDiv", { blue: isHome })}>
                Home
              </div>
              <div
                onClick={goJordan1}
                className={cx("leftDiv", { blue: isJordan })}
              >
                Jordan1
              </div>
              <div onClick={goDunk} className={cx("leftDiv", { blue: isDunk })}>
                Dunk
              </div>
              <div
                onClick={goEntertainment}
                className={cx("leftDiv", { blue: isEntertainment })}
              >
                Entertainment
              </div>
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
              <img className={styles.img} src={logo} alt="nikelogo" />
              <div onClick={goHome} className={cx("leftDiv", { blue: isHome })}>
                Home
              </div>
              <div
                onClick={goJordan1}
                className={cx("leftDiv", { blue: isJordan })}
              >
                Jordan1
              </div>
              <div onClick={goDunk} className={cx("leftDiv", { blue: isDunk })}>
                Dunk
              </div>
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
