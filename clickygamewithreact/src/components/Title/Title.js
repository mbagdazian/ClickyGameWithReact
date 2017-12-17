import React from "react";
import "./Title.css";

const Title = props => <div><h1 className="title">Clicky Game!</h1><h1>High Score: {props.highestScore}</h1><h1>Score: {props.score}</h1></div>;

export default Title;
