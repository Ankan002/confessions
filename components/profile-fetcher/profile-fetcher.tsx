"use client";

import { getUser } from "helpers/get-user";
import { authAtom, userAtom, userLoadingAtom } from "atoms";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toast } from "react-hot-toast";
import { User } from "types/general";

const ProfileFetcher = () => {
    const [isAuthenticated, setIsAuthenticated] = useRecoilState<boolean>(authAtom);
    const [isUserLoading, setIsUserLoading] = useRecoilState<boolean>(userLoadingAtom);
    const setUser = useSetRecoilState<User | null>(userAtom);

    const fetchProfile = async() => {
        if(isUserLoading) return;

        setIsUserLoading(true);

        const userResponse = await getUser();

        if(!userResponse.success) {
            toast.error(userResponse.error ?? "");
            setIsUserLoading(false);

            return;
        }

        if(userResponse.user) setUser(userResponse.user);

        console.log(userResponse.user);

        setIsUserLoading(false);
    }

    useEffect(() => {
        if(!isAuthenticated) return;

        fetchProfile();
    }, [isAuthenticated]);

    return <></>;
};

export default ProfileFetcher;
