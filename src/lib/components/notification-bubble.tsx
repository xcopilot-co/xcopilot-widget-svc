import { useContext } from "react";
import { ChatState } from "../contexts/chat-state-context";

const NotificationBubble = ({ content }: { content: string }) => {
  const { notificationsOpen, setOpen, setNotificationsOpen } =
    useContext(ChatState);

  return (
    <>
      {notificationsOpen && (
        <div className="flex flex-col justify-end gap-2 transition-opacity ease-out opacity-50 duration- notification__bubble hover:opacity-100 group">
          <div
            className="items-center hidden p-2 rounded-lg cursor-pointer align-end group-hover:block bg-secondary w-fit"
            onClick={() => setNotificationsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="red"
            >
              {/* close */}
              <path
                fillRule="evenodd"
                d="M10 9.586l4.95-4.95 1.414 1.414L11.414 11l4.95 4.95-1.414 1.414L10 12.414l-4.95 4.95-1.414-1.414L8.586 11 3.636 6.05l1.414-1.414L10 9.586z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="flex flex-col gap-2 px-3 py-2 text-sm break-words rounded-lg shadow-sm cursor-pointer text-wrap bg-secondary"
            onClick={() => {
              setOpen(true);
              setNotificationsOpen(false);
            }}
          >
            {content}
          </div>
          <kbd className="flex flex-col gap-2 px-3 py-1 text-sm break-words rounded-lg shadow-sm cursor-pointer text-wrap bg-secondary">
            <span className="text-xs">Press ⌘ k to open chat</span>
          </kbd>
        </div>
      )}
    </>
  );
};

export default NotificationBubble;
