import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import RoutesCompose from "./routes";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/styles/themes/default";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
          <RoutesCompose />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
