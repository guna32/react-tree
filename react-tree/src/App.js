import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from "./Tree";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>{count}</div>
      <div
        onClick={e => {
          console.log("event", e);
          setCount(count + 1);
        }}
        style={{ width: "1em", height: "1em" }}
      ></div>
      <Tree />
    </div>
  );
}

export default App;
