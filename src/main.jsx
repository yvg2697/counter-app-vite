import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10}/>
  </React.StrictMode> 
);
