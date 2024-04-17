import React from "react";
import { Avatar } from "./ui/avatar";
import { SocketContext } from "../contexts/socket-context";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import { ChatState } from "../contexts/chat-state-context";
import { PAGES } from "../contexts/pages";

const ChatHeader = ({
  name,
  logo,
}: // subHeader,
{
  name: string;
  logo: React.ReactNode;
  subHeader: string;
}) => {
  const { state } = React.useContext(SocketContext);
  const { setActivePage } = React.useContext(ChatState);

  const handleBackClick = () => {
    setActivePage(PAGES.HOME);
  };

  return (
    <div className="frame_header">
      <Button onClick={handleBackClick} variant={"default"}>
        <Icons.chevronLeft className="w-5 h-5" />
      </Button>
      <Avatar className="flex items-center justify-center p-2 bg-white dark:bg-white">
        {logo}
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="font-medium leading-none text-md">{name}</p>
        <p className="flex items-center gap-2 text-xs font-medium leading-none -flex-row">
          {/* status indicator */}

          {state.state === "connected" ? (
            <svg
              className="w-2 h-2 ml-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
          ) : state.state === "disconnected" ? (
            <svg
              className="w-2 h-2 ml-1 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
          ) : (
            <svg
              className="w-2 h-2 ml-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
          )}
          {
            {
              connected: "Online",
              disconnected: "Offline",
              retrying: "Retrying",
              error: "Error",
              stale: "Stale",
            }[state.state]
          }
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
