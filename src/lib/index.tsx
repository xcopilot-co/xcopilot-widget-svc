import { Icons } from "./components/ui/icons";
import { Chat } from "./screens/chat";

const XCopilot = ({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo = <Icons.logoDark className="w-5 h-5" />,
  headers,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
  anchorId?: string;
  headers?: Record<string, any>;
}) => {
  return (
    <div>
      <Chat
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
        headers={headers}
      />
    </div>
  );
};

export default XCopilot;
