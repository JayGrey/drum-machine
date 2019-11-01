import * as React from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store } from "../store/store";

export const App = () => {

  const keyHandler = (event: KeyboardEvent) => {
    console.log(event.key, event.code);
  }

  useEffect(() => {
    document.addEventListener("keypress", keyHandler);

    return () => document.removeEventListener("keypress", keyHandler);
  });

  return (
    <Provider store={store}>
      <div id="drum-machine" className="container-fluid">
        <Display />
        <Pinpad />
      </div>
    </Provider>
  );
};
