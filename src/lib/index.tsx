import React from "react";
import { Icons } from "./components/ui/icons";
import { ChatState } from "./contexts/chat-state-context";
import Chat from "./screens/chat";
import Home from "./screens/home";
import { Card } from "./components/ui/card";
import NotificationBubble from "./components/notification-bubble";
import { Button } from "./components/ui/button";
import Conversations from "./screens/conversations";
import Notifications from "./screens/notifications";

const XCopilot = ({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo = <Icons.logoDark className="w-5 h-5" />,
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
}) => {
  const { activePage, open, setOpen, user } = React.useContext(ChatState);
  console.log(activePage, "activePage");

  const getComponentFromActivePage = () => {
    switch (activePage) {
      case "HOME":
        return <Home user={user} />;
      case "CHAT":
        return (
          <Chat
            chatBotId={chatBotId}
            chatBotkey={chatBotkey}
            name={name}
            logo={logo}
            headers={headers}
            subHeader={subHeader}
          />
        );
      case "CONVERSATIONS":
        return <Conversations />;
      case "NOTIFICATIONS":
        return <Notifications />;

      default:
        return <Home user={user} />;
    }
  };

  const mountedStyle = {
    animation: "chat_popup_in_animation 350ms cubic-bezier(0, 1.2, 1, 1)",
  };
  const unmountedStyle = {
    animation: "chat_popup_out_animation 200ms cubic-bezier(0, 1.2, 1, 1)",
    animationFillMode: "forwards",
  };

  const handleChatOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Card className={`frame`} style={open ? mountedStyle : unmountedStyle}>
        {getComponentFromActivePage()}
      </Card>
      {/* <div className="flex-row "> */}
      <div className="flex flex-col gap-2">
        <NotificationBubble
          content="Hello how can I help you Today?! You can 
     ask me anything about your business or how to use XCopilot. 
     "
        />
        {/* <NotificationBubble content="Click here or press " /> */}
      </div>

      <Button onClick={handleChatOpen} className={`trigger_button`}>
        <Icons.logo className="w-10 h-10" />
        <span className="sr-only">New chat</span>
      </Button>
      {/* </div> */}
    </>
  );
};

export default XCopilot;
