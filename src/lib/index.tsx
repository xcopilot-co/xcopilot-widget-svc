import { Icons } from "./components/ui/icons";
import { Chat } from "./screens/chat";

const XCopilot = ({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo = <Icons.logoDark className="w-5 h-5" />,
  token,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
  anchorId?: string;
  token?: string;
}) => {
  return (
    <div>
      <Chat
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
        token={token}
      />
    </div>
  );
};

export default XCopilot;
