import { atom } from "recoil";

export const userLoadingAtom = atom<boolean>({
    key: "userLoadingAtom",
    default: false,
});
