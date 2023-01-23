import { atom } from "recoil";
import {Theme} from "types/general";

export const themeAtom = atom<Theme>({
    key: "themeAtom",
    default: "light"
});
