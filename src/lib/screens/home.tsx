// import { Card } from "../components/ui/card";
import ActionCard from "../components/action-card";
import { Icons } from "../components/ui/icons";
import { ActionCardsData, PAGES } from "../contexts/pages";

const Home = ({
  user,
}: {
  user: {
    name: string;
    email: string;
    userId: string;
  };
}) => {
  return (
    <div className="home">
      <div className="relative p-5 text-white home__header">
        <div className="p-5">
          <div className="py-6">
            <Icons.logo className="w-10 h-10" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold ">Welcome {user.name}</h1>
            <h1 className="text-3xl font-semibold ">How can I help you?</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-6">
        {ActionCardsData.map((actionCard, index) => (
          <ActionCard
            key={index}
            title={actionCard.title}
            description={actionCard.description}
            icon={actionCard.icon}
            page={actionCard.page as PAGES}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
