import { User } from "@/types/general";
import { atom } from "recoil";

export const userAtom = atom<User | null>({
    key: "userAtom",
    default: null,
});
