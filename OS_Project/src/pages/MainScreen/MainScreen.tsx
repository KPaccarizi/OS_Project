import { MenuBar } from "@components/MainScreen/MenuBar/MenuBar";
import { ApplicationsSection } from "@components/MainScreen/ApplicationsSection/ApplicationsSection";

export const MainScreen = () => {
  return (
    <div className="flex w-full flex-col">
      <MenuBar />
      <div className="flex-1 p-5 flex flex-col">
        <ApplicationsSection />
      </div>
    </div>
  );
};
