import { useState } from "react";

import {
  WindowContext,
  WindowContextValues,
  WindowType,
} from "./WindowContext";
import { WindowModal } from "@components/shared/Modal/WindowModal/WindowModal";

interface Props {
  children: React.ReactNode;
}

export const WindowContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [component, setComponent] = useState<WindowType | null>(null);

  const handleWindowOpen = (component: WindowType) => {
    setIsVisible(true);
    setComponent(component);
  };

  const handleWindowClose = () => {
    setIsVisible(false);
    setTimeout(() => setComponent(null), 300);
  };

  const context: WindowContextValues = {
    openWindow: handleWindowOpen,
  };

  return (
    <WindowContext.Provider value={context}>
      <WindowModal
        isVisible={isVisible}
        onClose={handleWindowClose}
        component={component}
      />
      {children}
    </WindowContext.Provider>
  );
};
