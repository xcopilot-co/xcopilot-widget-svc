import { Avatar } from "./ui/avatar";

const ChatHeader = ({
  name,
  logo,
  subHeader
}: {
  name: string;
  logo: React.ReactNode;
  subHeader: string
}) => {
  return (
    <div className="frame_header">
      <Avatar className="flex items-center justify-center bg-white dark:bg-white p-2">
        {logo}
      </Avatar>
      <div className="flex gap-1 flex-col">
        <p className="text-md font-medium leading-none">{name}</p>
        <p className="text-xs font-medium leading-none">{subHeader}
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
