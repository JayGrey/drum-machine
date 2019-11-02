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
  return (
    <div className="pinpad border border-default mx-auto mt-2">
      <div className="row mt-1">
        <Button
          title={"Q"}
          pressed={props.keys["Q"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"W"}
          pressed={props.keys["W"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"E"}
          pressed={props.keys["E"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
      </div>
      <div className="row mt-1">
        <Button
          title={"A"}
          pressed={props.keys["A"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"S"}
          pressed={props.keys["S"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"D"}
          pressed={props.keys["D"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
      </div>
      <div className="row mt-1">
        <Button
          title={"Z"}
          pressed={props.keys["Z"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"X"}
          pressed={props.keys["X"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
        <Button
          title={"C"}
          pressed={props.keys["C"]}
          keyDownHandler={props.keyDownHandler}
          keyUpHandler={props.keyUpHandler}
        />
      </div>
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
