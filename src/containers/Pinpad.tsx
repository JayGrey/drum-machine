import * as React from "react";
import * as ReactRedux from "react-redux";
import { Button } from "../components/Button";
import { StoreState, keyPressedAction, keyReleasedAction } from "../store/store";

interface PinpadProps {
  keyDownHandler: Function;
  keyUpHandler: Function;
  keys: { [key: string]: boolean };
}

const Pinpad = (props: PinpadProps): JSX.Element => {
  const makeRow = (arr: string[]): JSX.Element[] => {
    return arr.map(elem => (
      <Button
        key={elem}
        title={elem}
        pressed={props.keys[elem]}
        keyDownHandler={props.keyDownHandler}
        keyUpHandler={props.keyUpHandler}
      />
    ));
  };

  return (
    <div className="pinpad border border-default mx-auto mt-2 p-2">
      <div className="row mt-3">{makeRow(["Q", "W", "E"])}</div>
      <div className="row mt-3">{makeRow(["A", "S", "D"])}</div>
      <div className="row mt-3">{makeRow(["Z", "X", "C"])}</div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  keys: state.keys,
});

const mapDispatchToProps = {
  keyDownHandler: keyPressedAction,
  keyUpHandler: keyReleasedAction,
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Pinpad);
