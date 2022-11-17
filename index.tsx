import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

import "@styles/styles.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
