import { Avatar } from "./ui/avatar";

const ChatHeader = ({
  name,
  logo,
}: {
  name: string;
  logo: React.ReactNode;
}) => {
  return (
    <div className="frame_header">
      <Avatar className="flex items-center justify-center bg-white dark:bg-white p-2">
        {logo}
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
