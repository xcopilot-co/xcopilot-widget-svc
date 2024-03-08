import React from "react";
import ReactDOM from "react-dom/client";
import css from "./index.scss?inline";
import XCopilot from "./lib";
import { createOrGetRoot } from "./lib/utils";
import { ChatStateProvider } from "./lib/contexts/chat-state-context";

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
  headers,
  subHeader,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
  anchorId?: string;
  headers?: Record<string, any>;
  subHeader: string;
}) {
  const xcopilotRoot = createOrGetRoot(anchorId);
  ReactDOM.createRoot(xcopilotRoot!).render(
    <React.StrictMode>
      <ChatStateProvider>
        <XCopilot
          chatBotId={chatBotId}
          chatBotkey={chatBotkey}
          name={name}
          logo={logo}
          headers={headers}
          subHeader={subHeader}
        />
        <style>{css}</style>
      </ChatStateProvider>
    </React.StrictMode>
  );
}

window.initXCopilot = initXCopilot;
