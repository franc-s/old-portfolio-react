import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "./assets/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'typeface-roboto';

// pages
import Main from "./views/Main.js";

// others


ReactDOM.render(

<Main/>,

  document.getElementById("root")
);
