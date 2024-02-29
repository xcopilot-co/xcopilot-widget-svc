import * as React from "react";
// import { Check, Plus, Send } from "lucide-react";

import { Button } from "@/lib/components/ui/button";
import { Card } from "@/lib/components/ui/card";

import { Input } from "@/lib/components/ui/input";
import { ScrollArea } from "@/lib/components/ui/scroll-area";
import axios from "axios";
import { Icons } from "@/lib/components/ui/icons";
import ChatBubble from "../components/chat-bubble";
import ChatHeader from "../components/chat-header";

export function Chat({
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
  subHeader: string;
  headers?: Record<string, any>;
}) {
  const [open, setOpen] = React.useState(false);

  const [messages, setMessages] = React.useState<any>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const viewport = React.useRef<HTMLDivElement>();
  const inputLength = input.trim().length;

  React.useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.ctrlKey &&  e.code === 'Space') {
        setOpen(true);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  async function getChat(chatbotId: string, chatBotKey: string) {
    const res = await axios.get(`http://localhost:5000/chatbot/${chatbotId}`, {
      headers: {
        Authorization: `Bearer ${chatBotKey}`,
      },
    });
    setMessages(res?.data);
  }

  async function sendMessage(
    chatbotId: string,
    chatBotKey: string,
    message: string
  ) {
    setLoading(true);
    console.log(import.meta.env.XCOPILOT_CHAT_BASE_URL);
    console.log("headers", headers);
    const res = await axios.post(
      `http://localhost:5000/chatbot/${chatbotId}`,
      {
        prompt: message,
        headers: headers,
      },
      {
        headers: {
          Authorization: `Bearer ${chatBotKey}`,
        },
      }
    );
    console.log("res", res?.data);
    console.log(messages);
    setMessages([
      ...res?.data?.history,
      {
        type: "human",
        data: {
          content: res?.data?.input,
        },
      },
      {
        type: "ai",
        data: {
          content: res?.data?.output,
        },
      },
    ]);
    setLoading(false);
  }

  function useDelayUnmount(isMounted: any, delayTime: any) {
    const [showDiv, setShowDiv] = React.useState(false);
    React.useEffect(() => {
      let timeoutId: any;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
  }

  React.useEffect(() => {
    getChat(chatBotId, chatBotkey);
  }, []);

  React.useEffect(() => {
    console.log("chatBotId", viewport.current);
    if (viewport.current) {
      viewport.current.scrollTop = viewport.current.scrollHeight;
    }
  }, [messages]);

  const mountedStyle = {
    animation: "chat_popup_in_animation 200ms cubic-bezier(0, 1.2, 1, 1)",
  };
  const unmountedStyle = {
    animation: "chat_popup_out_animation 200ms cubic-bezier(0, 1.2, 1, 1)",
    animationFillMode: "forwards",
  };

  const showDiv = useDelayUnmount(open, 200);

  return (
    <>
      {showDiv && (
        <Card className={`frame`} style={open ? mountedStyle : unmountedStyle}>
          <ChatHeader name={name} logo={logo} subHeader= {subHeader}/>
          {/* <ScrollArea className="h-full">
            <div
              className="flex flex-col justify-end h-full m-2 space-y-4"
              // ref={viewport}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-wrap break-words",
                    message.type === "human"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              ))}
            </div>
          </ScrollArea> */}
          <ScrollArea className="h-full">
            <div className="frame_content">
              {messages?.map((message: any, index: any) => (
                <ChatBubble key={index} message={message} />
              ))}
              {loading && (
                <div className="typingIndicatorContainer">
                  <div className="typingIndicatorBubble">
                    <div className="typingIndicatorBubbleDot"></div>
                    <div className="typingIndicatorBubbleDot"></div>
                    <div className="typingIndicatorBubbleDot"></div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex items-center p-0 m-0">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (inputLength === 0) return;
                setMessages([
                  ...messages,
                  {
                    type: "human",
                    data: {
                      content: input,
                    },
                  },
                ]);
                setInput("");
                sendMessage(chatBotId, chatBotkey, input);
              }}
              className="flex items-center w-full h-full p-0 m-0 border-t border-gray-300 shadow-t-lg"
            >
              <Input
                id="message"
                placeholder="Type your message..."
                className="chat_text_field focus-visible:ring-0"
                autoComplete="off"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </form>
          </div>
        </Card>
      )}
      {/* <div className="flex-row "> */}
      <Button onClick={() => setOpen(!open)} className={`trigger_button`}>
        <Icons.logo className="w-10 h-10" />
        <span className="sr-only">New chat</span>
      </Button>
      {/* </div> */}
    </>
  );
}
