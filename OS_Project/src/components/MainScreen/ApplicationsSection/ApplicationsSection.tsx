import { useWindowContext } from "@context/WindowContext/WindowContext";

import { Application } from "@components/Applications/Application";
import { applications } from "@pages/MainScreen/lib/applications";
import { useUIContext } from "@context/UIContext/uicontext";
import { Icon } from "@components/shared/Icon/Icon";

export const ApplicationsSection = () => {
  const { openWindow } = useWindowContext();
  const { handleThemeSwitch, theme } = useUIContext();

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleThemeSwitch}
        className="bg-slate-500 rounded-full p-4 self-end dark:bg-white"
      >
        {theme === "dark" ? <Icon icon="sunny" /> : <Icon icon="dark" />}
      </button>

      <div className="flex gap-x-7">
        {applications.map((item) => (
          <Application
            {...item}
            key={`${item.name}-${item.icon}`}
            onDoubleClick={() => {
              openWindow(item.type);
            }}
          />
        ))}
      </div>
    </div>
  );
};
