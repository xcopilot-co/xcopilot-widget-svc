import React from "react";
import ReactDOM from "react-dom/client";
import css from "./index.scss?inline";
import XCopilot from "./lib";

declare global {
  interface Window {
    initXCopilot: typeof initXCopilot;
  }
}

function initXCopilot() {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <XCopilot />
      <style>{css}</style>
    </React.StrictMode>
  );
}

window.initXCopilot = initXCopilot;
