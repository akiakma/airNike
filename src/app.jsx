import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Main from "./components/home/main/main";
import Login from "./components/login/login";
import Dunk from "./components/Dunk/dunk";
import Jordan1 from "./components/Jordan1/jordan1";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main authService={authService} />
          </Route>
          <Route exact path="/login">
            <Login authService={authService} />
          </Route>
          <Route exact path="/jordan1">
            <Jordan1 authService={authService} />
          </Route>
          <Route exact path="/dunk">
            <Dunk authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
