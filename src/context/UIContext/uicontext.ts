import { createContext, useContext } from "react";

export interface UIContextValues {
  theme: string | null;
  handleThemeSwitch: () => void;
}

const UIContext = createContext<UIContextValues>({
  theme: "light",
  handleThemeSwitch: () => {},
});

export const useUIContext = () => useContext(UIContext);

export const UIProvider = UIContext.Provider;
