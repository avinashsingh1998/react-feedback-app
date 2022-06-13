import React from "react";
//import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

//new syntax for react 19
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

//old for react 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
