import React from "react";
import "./styles.scss";
import Audio from "./audio/Audio.jsx";
import TestUpload from "./testUpload.jsx";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  render() {
    return (
      <>
        <div className="navBar">
          <span className="title">Wyoming Student Voices</span>
          <span>search</span>
        </div>
        <div className="header">Jackson Hole</div>
        <div className="voices">
          <h2>voices</h2>
          <div className="voice">voice 1</div>
          <div className="voice">voice 2</div>
          <div className="voice">voice 3</div>
        </div>
        <Audio />
        <TestUpload />
      </>
    );
  }
}
