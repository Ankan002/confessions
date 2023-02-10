"use client";

import { Theme } from "types/general";
import { themeAtom } from "atoms";
import { useRecoilState } from "recoil";
import { TbSun, TbMoonStars } from "react-icons/tb"

const ThemeToggler = () => {
    const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

    const onToggleClick = () => {
        if(currentTheme === "light") {
            localStorage.setItem("theme", "dark");
            setCurrentTheme("dark");
            return;
        }

        localStorage.setItem("theme", "light");
        setCurrentTheme("light");
    }

    return (
        <button className="border-2 border-primary-dark dark:border-primary-light bg-primary-dark-yellow  dark:bg-primary-pink rounded-md fixed right-5 bottom-5 p-2 flex items-start justify-center shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)] dark:shadow-[0_1px_12px_2px_rgba(255,16,227,0.7)]" onClick={onToggleClick} aria-label="toggle-theme">
            {
                currentTheme === "light" ? (
                    <TbMoonStars className="text-secondary-dark text-xl" />
                ) : (
                    <TbSun className="text-primary-light text-xl" />
                )
            }
        </button>
    );
};

export default ThemeToggler;
