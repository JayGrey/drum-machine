import * as React from "react";
import * as ReactRedux from "react-redux";
import { Button } from "../components/Button";
import { buttonPressedAction } from "../store/store";

const Pinpad = (props: {clickHandler: Function}) => {
  return (
    <div className="pinpad border border-default mx-auto mt-2">
      <div className="row mt-1">
        <Button title={"Q"} clickHandler={props.clickHandler} />
        <Button title={"W"} clickHandler={props.clickHandler}/>
        <Button title={"E"} clickHandler={props.clickHandler}/>
      </div>
      <div className="row mt-1">
        <Button title={"A"} clickHandler={props.clickHandler}/>
        <Button title={"S"} clickHandler={props.clickHandler}/>
        <Button title={"D"} clickHandler={props.clickHandler}/>
      </div>
      <div className="row mt-1">
        <Button title={"Z"} clickHandler={props.clickHandler}/>
        <Button title={"X"} clickHandler={props.clickHandler}/>
        <Button title={"C"} clickHandler={props.clickHandler}/>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  clickHandler: buttonPressedAction,
};

export default ReactRedux.connect(null, mapDispatchToProps)(Pinpad);
