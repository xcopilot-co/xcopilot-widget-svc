import { Icons } from "../components/ui/icons";
import Chat from "../screens/chat";
import Home from "../screens/home";

export enum PAGES {
  "HOME" = "HOME",
  "CHAT" = "CHAT",
  "CONVERSATIONS" = "CONVERSATIONS",
  "NOTIFICATIONS" = "NOTIFICATIONS",
}

export const pageComponentMap = {
  HOME: Home,
  CHAT: Chat,
};

export const ActionCardsData = [
  {
    title: "Chat with us",
    description: "Chat with our support team",
    icon: <Icons.messageCircle className="w-7 h-7" />,
    page: "CONVERSATIONS",
  },
  {
    title: "AI Assistant",
    description: "Get help from our AI assistant",
    icon: <Icons.logoDark className="w-7 h-7" />,
    page: "CHAT",
  },
  {
    title: "Notifications",
    description: "You have 3 new notifications",
    icon: <Icons.bell className="w-7 h-7" />,
    page: "NOTIFICATIONS",
  },
];

export const navItems = [
  {
    icon: <Icons.layoutGrid className="w-7 h-7" />,
    page: PAGES.HOME,
    title: "Home",
  },
  {
    icon: <Icons.logoDark className="w-7 h-7" />,
    page: PAGES.CHAT,
    title: "AI",
  },
  {
    icon: <Icons.messageCircle className="w-7 h-7" />,
    page: PAGES.CONVERSATIONS,
    title: "Messages",
  },
  {
    icon: <Icons.bell className="w-7 h-7" />,
    page: PAGES.NOTIFICATIONS,
    title: "Notifications",
  },
];
