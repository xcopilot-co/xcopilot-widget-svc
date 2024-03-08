import { createContext, useState } from "react";

export interface ChatState {
  open: boolean;
  setOpen: (open: boolean) => void;
  notificationsOpen: boolean;
  setNotificationsOpen: (open: boolean) => void;
}
const ChatState = createContext<ChatState>({
  open: false,
  setOpen: () => {},
  notificationsOpen: false,
  setNotificationsOpen: () => {},
});

const ChatStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(true);

  return (
    <ChatState.Provider
      value={{
        open,
        setOpen,
        notificationsOpen,
        setNotificationsOpen,
      }}
    >
      {children}
    </ChatState.Provider>
  );
};

export { ChatState, ChatStateProvider };
