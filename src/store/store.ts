import * as Redux from "redux";

export interface StoreState {
  displayText: string;
}

enum Actions {
  BUTTON_PRESSED = "BUTTON_PRESSED",
}

interface AppActions extends Redux.Action<Actions> {
  payload?: any;
}

const defaultState: StoreState = { displayText: "" };

export const buttonPressedAction = (buttonName: string): AppActions => ({
  type: Actions.BUTTON_PRESSED,
  payload: buttonName,
});

const reducer = (state: StoreState = defaultState, action: AppActions): StoreState => {
  switch (action.type) {
    case Actions.BUTTON_PRESSED: {
      return { ...state, displayText: action.payload };
    }

    default:
      return state;
  }
};

export const store = Redux.createStore(reducer);
