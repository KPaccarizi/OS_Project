import { createContext, useContext } from "react";

export type WindowType =
  | "browser"
  | "camera"
  | "gallery"
  | "folder"
  | "news"
  | "preference";

export interface WindowContextValues {
  openWindow: (window: WindowType) => void;
}

export const WindowContext = createContext<WindowContextValues>({
  openWindow: () => {},
});

export const useWindowContext = () => {
  if (!WindowContext) {
    throw new Error("useWindowContext should be used inside of WindowContext!");
  }

  return useContext(WindowContext);
};
