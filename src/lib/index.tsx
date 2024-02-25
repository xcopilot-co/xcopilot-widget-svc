import { Icons } from "./components/ui/icons";
import { Chat } from "./screens/chat";

const XCopilot = ({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo = <Icons.logoDark className="w-5 h-5" />,
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
}) => {
  return (
    <div>
      <Chat
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
      />
    </div>
  );
};

export default XCopilot;
