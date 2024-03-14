import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './index.scss?inline';
import XCopilot from './lib';
import { createOrGetRoot } from './lib/utils';
import { ChatStateProvider } from './lib/contexts/chat-state-context';
import { SocketProvider } from './lib/contexts/socket-context';

declare global {
  interface Window {
    initXCopilot: typeof initXCopilot;
  }
}

function initXCopilot({
  chatBotId,
  chatBotkey,
  name = 'XCopilot',
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
        <SocketProvider>
          <XCopilot
            chatBotId={chatBotId}
            chatBotkey={chatBotkey}
            name={name}
            logo={logo}
            headers={headers}
            subHeader={subHeader}
          />
          <style>{css}</style>
        </SocketProvider>
      </ChatStateProvider>
    </React.StrictMode>
  );
}

window.initXCopilot = initXCopilot;
