import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import ThemeProvider from "./helpers/themes/ThemeProvider.helper";
import Persistgate from './config/persistor.config.js'


const ROOT = document.getElementById("root");
render(
<Persistgate>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Persistgate>,
  ROOT
);
