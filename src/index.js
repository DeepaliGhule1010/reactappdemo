import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
//const el = React.createElement("span", null, "@");
// ReactDOM.render(
//   React.createElement("h1", { style: { color: "blue" } }, "Hello World!!", el),
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Monday"),
//     React.createElement("li", null, "Tuesday"),
//     React.createElement("li", null, "Wednesday")
//   ),
//   document.getElementById("root")
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
