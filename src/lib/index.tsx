import { Icons } from "./components/ui/icons";
import { Chat } from "./screens/chat";

const XCopilot = ({
  chatBotId,
  chatBotkey,
  name = "XCopilot",
  logo = <Icons.logoDark className="w-5 h-5" />,
  headers,
  subHeader
}: {
  chatBotId: string;
  chatBotkey: string;
  name: string;
  logo?: React.ReactNode;
  anchorId?: string;
  headers?: Record<string, any>;
  subHeader: string
}) => {
  return (
    <div>
      <Chat
        chatBotId={chatBotId}
        chatBotkey={chatBotkey}
        name={name}
        logo={logo}
        headers={headers}
        subHeader={subHeader}
      />
    </div>
  );
};

export default XCopilot;
