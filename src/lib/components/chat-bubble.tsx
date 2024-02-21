import Markdown from "./markdown";
import { cn } from "../utils";

const ChatBubble = ({ key, message }: any) => {
  return (
    <div
      key={key}
      className={cn(
        "flex  max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-wrap break-words",
        message.type === "human"
          ? "ml-auto bg-primary text-primary-foreground"
          : "bg-muted"
      )}
    >
      <Markdown content={message?.data?.content} />
    </div>
  );
};

export default ChatBubble;
