import { useEffect, useState } from "react";

import { UIContextValues, UIProvider } from "./uicontext";

interface Props {
  children: React.ReactNode;
}

export const UIContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // localStorage.setItem("theme", theme);
  };

  const contextValues: UIContextValues = {
    theme,
    handleThemeSwitch,
  };

  return <UIProvider value={contextValues}>{children}</UIProvider>;
};
