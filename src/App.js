import React from "react";
import "./App.css";
const clock = require("world-clock");

function App(props) {
  console.log(clock);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.date.toLocaleTimeString()}</h1>
      </header>
    </div>
  );
}

export default App;
