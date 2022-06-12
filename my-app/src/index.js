import React from "react";
import ReactDOM from "react-dom";
import Clock from "./chapter_04/clock.jsx";

const domContainer = document.getElementById("root");
setInterval(() => {
  ReactDOM.render(<Clock />, domContainer);
}, 1000);
