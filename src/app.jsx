import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Main from "./components/home/main/main";
import Login from "./components/login/login";
import Dunk from "./components/dunk/dunk";
import Jordan1 from "./components/jordan1/jordan1";
import Entertainment from "./components/entertainment/entermain/entertainment";

function App({ authService, FileInput, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/airNike">
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
          <Route exact path="/entertainment">
            <Entertainment
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
