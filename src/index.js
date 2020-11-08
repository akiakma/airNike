import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/entertainment/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";
import { Provider } from "react-redux";
import rootReducer from "./components/jordan1/modules/jordan_item";
import { createStore } from "redux";

const authService = new AuthService();

const imageUploader = new ImageUploader();

const cardRepository = new CardRepository();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </Provider>,
  document.getElementById("root")
);
