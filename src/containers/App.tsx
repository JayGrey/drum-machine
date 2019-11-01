import * as React from "react";
import { Provider } from "react-redux";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store } from "../store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <div id="drum-machine" className="container-fluid">
        <Display />
        <Pinpad />
      </div>
    </Provider>
  );
};
