import * as React from "react";

// () => props.clickHandler(`${props.title} player`)

export const Button = (props: { title: string; clickHandler: Function }) => {
  return (
    <div className="col d-flex flex-column align-items-center ">
      <span className="border border-secondary rounded p-1">
        <button className="btn btn-secondary drum-pad" onClick={() => props.clickHandler(`${props.title} player`)}>
          <audio src={`assets/${props.title}.wav`} className="clip" id={props.title}></audio>
        </button>
      </span>
      <p className="font-weight-bold">{props.title}</p>
    </div>
  );
};
