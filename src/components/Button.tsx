import * as React from "react";
import classNames from "classnames";
import { keyDown, keyUp } from "../containers/App";

interface ButtonProps {
  title: string;
  pressed: boolean;
  keyDownHandler: Function;
  keyUpHandler: Function;
}

const soundLinks: { [key: string]: string } = {
  Q: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/Q.wav",
  W: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/W.wav",
  E: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/E.wav",
  A: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/A.wav",
  S: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/S.wav",
  D: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/D.wav",
  Z: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/Z.wav",
  X: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/X.wav",
  C: "https://raw.githubusercontent.com/JayGrey/assets/master/sounds/drum-machine/C.wav",
};

export const Button = (props: ButtonProps): JSX.Element => {
  const buttonClass = classNames("btn", props.pressed ? "btn-warning" : "btn-secondary", "drum-pad");
  const mouseDownHandler = (event: React.MouseEvent): void => {
    keyDown(props.title);
  };

  const mouseUpHandler = (event: React.MouseEvent): void => {
    keyUp(props.title);
  };

  return (
    <div className="col d-flex flex-column align-items-center ">
      <span className="border border-secondary rounded p-1">
        <button className={buttonClass} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
          <audio src={soundLinks[props.title]} className="clip" id={props.title}></audio>
        </button>
      </span>
      <p className="font-weight-bold">{props.title}</p>
    </div>
  );
};
