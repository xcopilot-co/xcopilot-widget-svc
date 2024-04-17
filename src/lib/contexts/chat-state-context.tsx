import { createContext, useState } from "react";
import { PAGES } from "./pages";

export interface ChatState {
  open: boolean;
  setOpen: (open: boolean) => void;
  notificationsOpen: boolean;
  setNotificationsOpen: (open: boolean) => void;
  activePage: PAGES;
  setActivePage: (page: PAGES) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  user: {
    name: string;
    email: string;
    userId: string;
  };
}
const ChatState = createContext<ChatState>({
  open: false,
  setOpen: () => {},
  notificationsOpen: false,
  setNotificationsOpen: () => {},
  activePage: PAGES.HOME,
  setActivePage: () => {},
  loading: true,
  setLoading: () => {},
  user: {
    name: "",
    email: "",
    userId: "",
  },
});

const ChatStateProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: {
    name: string;
    email: string;
    userId: string;
  };
}) => {
  const [open, setOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(true);
  const [activePage, setActivePage] = useState<PAGES>(PAGES.HOME);
  const [loading, setLoading] = useState(false);

  return (
    <ChatState.Provider
      value={{
        open,
        setOpen,
        notificationsOpen,
        setNotificationsOpen,
        activePage,
        setActivePage,
        loading,
        setLoading,
        user,
      }}
    >
      {children}
    </ChatState.Provider>
  );
};

export { ChatState, ChatStateProvider };
