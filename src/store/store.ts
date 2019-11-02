import * as Redux from "redux";

export interface StoreState {
  displayText: string;
  keys: { [index: string]: boolean };
}

enum Actions {
  BUTTON_PRESSED = "BUTTON_PRESSED",
  DISPLAY_CHANGED = "DISPLAY_CHANGE",
  KEY_PRESSED = "KEY_PRESSED",
  KEY_RELEASED = "KEY_RELEASED",
}

interface AppActions extends Redux.Action<Actions> {
  payload?: any;
}

const defaultState: StoreState = {
  displayText: "",
  keys: {
    Q: false,
    W: false,
    E: false,
    A: false,
    S: false,
    D: false,
    Z: false,
    X: false,
    C: false,
  },
};

export const displayChangedAction = (text: string): AppActions => ({
  type: Actions.DISPLAY_CHANGED,
  payload: text,
});

export const keyPressedAction = (key: string): AppActions => ({
  type: Actions.KEY_PRESSED,
  payload: key,
});

export const keyReleasedAction = (key: string): AppActions => ({
  type: Actions.KEY_RELEASED,
  payload: key,
});

const reducer = (state: StoreState = defaultState, action: AppActions): StoreState => {
  switch (action.type) {
    case Actions.DISPLAY_CHANGED: {
      return { ...state, displayText: action.payload };
    }

    case Actions.KEY_PRESSED: {
      return { ...state, keys: { ...state.keys, [action.payload]: true } };
    }

    case Actions.KEY_RELEASED: {
      return { ...state, keys: { ...state.keys, [action.payload]: false } };
    }

    default:
      return state;
  }
};

export const store = Redux.createStore(reducer);
