import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";

const theme = {
  colors: {
    primary: "#b85600",
    secondary: "#08002b",
    bg: "#220045",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
