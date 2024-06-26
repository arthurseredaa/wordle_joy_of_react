import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

import "./reset.css";
import "./styles.css";
import { LanguageProvider } from "./components/LanguageContext";

const root = createRoot(document.querySelector("#root"));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
