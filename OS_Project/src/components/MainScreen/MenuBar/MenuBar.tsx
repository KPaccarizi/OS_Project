import { useWindowContext } from "@context/WindowContext/WindowContext";

import { CurrentTime } from "@components/CurrentTime/CurrentTime";
import { BatteryLife } from "@components/BatteryLife/BatteryLife";

export const MenuBar = () => {
  const { openWindow } = useWindowContext();

  return (
    <div className="flex justify-between items-center px-2 w-full h-[25px] bg-grey dark:bg-[#535a62]">
      <span
        onClick={() => openWindow("preference")}
        className="text-xs font-bold cursor-pointer"
      >
        Preferences
      </span>
      <div className="flex items-center">
        <BatteryLife />
        <CurrentTime />
      </div>
    </div>
  );
};
