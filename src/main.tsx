import React from "react";
import ReactDOM from "react-dom/client";
import css from "./index.scss?inline";
import XCopilot from "./lib";
import { createOrGetRoot } from "./lib/utils";

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
  anchorId,
  token,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
  anchorId?: string;
  token?: string;
}) {
  const xcopilotRoot = createOrGetRoot(anchorId);
  ReactDOM.createRoot(xcopilotRoot!).render(
    <React.StrictMode>
      <XCopilot
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
        token={token}
      />
      <style>{css}</style>
    </React.StrictMode>
  );
}

window.initXCopilot = initXCopilot;
