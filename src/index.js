import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
// import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
// import cssVariables from './css_variables.json'

// const variavle = cssVariables.variable;

// const GlobalStyle = createGlobalStyle({
//   color: variavle.bgColor_g,
// });
ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
