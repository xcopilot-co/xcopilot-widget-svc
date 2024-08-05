import axios from "axios";

export const initBot = async ({
  chatbotId,
  chatBotKey,
  organizationId,
  user,
}: {
  chatbotId: string;
  chatBotKey: string;
  organizationId: string;
  user: {
    name: string;
    email: string;
    userId: string;
  };
}) => {
  try {
    const initRes = await axios.post(
      `http://localhost:5000/chatbot/${chatbotId}/init`,
      {
        user: user,
        organizationId: organizationId,
      },
      {
        headers: {
          Authorization: `Bearer ${chatBotKey}`,
        },
      }
    );
    console.log("initRes", initRes?.data?.user);
    return initRes?.data?.user;
  } catch (e) {
    console.log(e);
  }
};
