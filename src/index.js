import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom"
// styles
import "./assets/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'typeface-roboto';

// pages
import App from "./views/App.js";

// others

ReactDOM.render(
<HashRouter>
  <App/>
</HashRouter>,

  document.getElementById("root")
);
