import ReactDOM from "react-dom";
import promiseFinally from "promise.prototype.finally";
import React from "react";
import { HashRouter } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import { App } from "./components/App";

import articlesStore from "./stores/articlesStore";
import commentsStore from "./stores/commentsStore";
import authStore from "./stores/authStore";
import commonStore from "./stores/commonStore";
import editorStore from "./stores/editorStore";
import userStore from "./stores/userStore";
import profileStore from "./stores/profileStore";
import { StoreProvider } from "./stores/provider";
import { AppStore } from "./stores/store";

configure({
  enforceActions: true
});

const stores = {
  articlesStore,
  commentsStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore
};

const store = AppStore.create({});
store.load();

// For easier debugging
(window as any)._____APP_STATE_____ = stores;
(window as any).store = store;

promiseFinally.shim();

ReactDOM.render(
  <StoreProvider store={store}>
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StoreProvider>,
  document.getElementById("root")
);
