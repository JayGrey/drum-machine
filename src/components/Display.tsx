import * as React from "react";

interface DisplayProps {
  text: string;
}

export const Display = (props: DisplayProps): JSX.Element => {
  return (
    <div id="display" className="border mx-auto p-2 bg-secondary">
      <p className="border w-100 h-100 text-success bg-dark  p-1">{props.text}</p>
    </div>
  );
};
