import React from "react";
import { ChatState } from "../contexts/chat-state-context";

const Header = () => {
  const { activePage } = React.useContext(ChatState);
  return (
    <div className="h-[64px]  bg-black flex items-center justify-center">
      <p className="font-bold text-white capitalize">{activePage}</p>
    </div>
  );
};

export default Header;
