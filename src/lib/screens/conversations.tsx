import { useContext } from "react";
import ScreenLayout from "./screenLayout";
import useSwr from "swr";
import { ChatState } from "../contexts/chat-state-context";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

const Conversations = () => {
  const { user, setActiveConversation } = useContext(ChatState);

  const { data: conversations } = useSwr(
    `http://localhost:8080/chat/conversations/widget/${user.id}`
  );

  console.log(conversations, "conversations");
  return (
    <ScreenLayout>
      {conversations?.map((conversation: any, index: number) => (
        <>
          <div
            key={conversation.id}
            className="flex flex-row items-center gap-4 p-4 cursor-pointer hover:bg-gray-100"
            onClick={()=>{
              setActiveConversation(conversation)
            }}
          >
            <div className="flex flex-col">
              <Avatar>
                <AvatarImage alt={conversation?.customer?.name} />
                <AvatarFallback>
                  {conversation?.customer?.name
                    .split(" ")
                    .map((chunk: any) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold text-md">
                {conversation.messages[0]?.message}
              </div>
              <div className="text-sm font-light">
                {formatDistanceToNow(new Date(conversation?.createdAt), {
                  addSuffix: true,
                })}
              </div>
            </div>
          </div>
          {index !== conversations.length - 1 && <hr />}
        </>
      ))}
    </ScreenLayout>
  );
};

export default Conversations;
