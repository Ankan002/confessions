"use client";

import { Theme } from "types/general";
import { useRecoilState } from "recoil";
import { themeAtom } from "atoms";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

const ThemeProvider = (props: Props) => {
  const { children } = props;

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

  const isLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (window === undefined) return;
    if (isLoaded.current) return;

    isLoaded.current = true;

    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme || (savedTheme !== "dark" && savedTheme !== "light")) {
      localStorage.setItem("theme", currentTheme);
      return;
    }

    setCurrentTheme(savedTheme);
  }, []);

  return <div className={currentTheme}>{children}</div>;
};

export default ThemeProvider;
