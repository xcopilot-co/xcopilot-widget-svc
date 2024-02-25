import React from "react";
import ReactDOM from "react-dom/client";
import css from "./index.scss?inline";
import XCopilot from "./lib";

declare global {
  interface Window {
    initXCopilot: typeof initXCopilot;
  }
}

function initXCopilot({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
}) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <XCopilot
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
      />
      <style>{css}</style>
    </React.StrictMode>
  );
}

window.initXCopilot = initXCopilot;
