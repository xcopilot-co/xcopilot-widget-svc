import React from "react";
import { Card } from "./ui/card";
import { ChatState } from "../contexts/chat-state-context";
import { PAGES } from "../contexts/pages";

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  page: PAGES;
}

const ActionCard = ({ title, description, icon, page }: ActionCardProps) => {
  const { setActivePage } = React.useContext(ChatState);

  const handleCardClick = () => {
    setActivePage(page);
  };
  return (
    <Card
      className="w-full px-6 py-1 bg-white border shadow-none cursor-pointer h-fit border-s"
      onClick={handleCardClick}
    >
      <div className="flex flex-row gap-4">
        <div className="py-3">{icon}</div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ActionCard;
