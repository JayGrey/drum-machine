import * as React from "react";
import * as ReactRedux from "react-redux";

import Display from "./Display";
import Pinpad from "./Pinpad";

import { store, keyPressedAction, keyReleasedAction, displayChangedAction } from "../store/store";

export const keyDown = (key: string): void => {
  store.dispatch(keyPressedAction(key));
};

export const keyUp = (key: string): void => {
  store.dispatch(keyReleasedAction(key));
  store.dispatch(displayChangedAction(`${key} played`));
  (document.querySelector(`audio#${key}`) as HTMLMediaElement).play();
};

export const App = (): JSX.Element => {
  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const keyDownHandler = (event: KeyboardEvent): void => {
    if (validKeys.includes(event.key.toUpperCase())) {
      keyDown(event.key.toUpperCase());
    }
  };

  const keyUpHandler = (event: KeyboardEvent): void => {
    if (validKeys.includes(event.key.toUpperCase())) {
      keyUp(event.key.toUpperCase());
    }
  };
  React.useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);

    return (): void => document.removeEventListener("keyup", keyUpHandler);
  });

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return (): void => document.removeEventListener("keydown", keyDownHandler);
  });

  return (
    <ReactRedux.Provider store={store}>
      <div id="drum-machine" className="container-fluid">
        <Display />
        <Pinpad />
      </div>
    </ReactRedux.Provider>
  );
};
