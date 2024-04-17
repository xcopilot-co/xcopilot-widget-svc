import Header from "../components/header";
import BottomNav from "../components/bottom-nav";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="mb-auto">{children}</div>
      <BottomNav />
    </div>
  );
};

export default ScreenLayout;
