import * as React from "react";
import * as ReactRedux from "react-redux";

import { Display } from "../components/Display";
import { StoreState } from "../store/store";


const DisplayContainer = (props: {text: string}): JSX.Element => {
  return <Display text={props.text}/>;
};

const mapStateToProps = (state: StoreState) => ({
    text: state.displayText
});

export default ReactRedux.connect(mapStateToProps, null)(DisplayContainer);
