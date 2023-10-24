"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "dark" | "light";
type SetTheme = Dispatch<SetStateAction<Theme>>;
export type DarkModeHookResult = [Theme, SetTheme];

function useDarkMode(): DarkModeHookResult {
  const [theme, setTheme] = useState<Theme>(
    (typeof window !== "undefined" && localStorage.theme) || "dark"
  );
  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
