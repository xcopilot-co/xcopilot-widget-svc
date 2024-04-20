import React from "react";
import { PAGES, navItems } from "../contexts/pages";
import { ChatState } from "../contexts/chat-state-context";

const NavItem = ({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  page: PAGES;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center p-4 cursor-pointer"
    >
      {icon}
    </div>
  );
};

const BottomNav = () => {
  const { setActivePage } = React.useContext(ChatState);
  return (
    <div className="flex flex-row w-full h-[80px] items-center justify-around shadow-[0px_-5px_40px_0px_#00000024] border-t-1 border">
      {navItems.map((actionCard, index) => (
        <NavItem
          key={index}
          icon={actionCard.icon}
          page={actionCard.page as PAGES}
          onClick={() => setActivePage(actionCard.page as PAGES)}
        />
      ))}
    </div>
  );
};

export default BottomNav;
