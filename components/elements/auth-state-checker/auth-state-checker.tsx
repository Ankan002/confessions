"use client";
import { authAtom } from "atoms";
import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
    children: ReactNode;
    onLoadAuthState: boolean
}

const AuthStateChecker = (props: Props) => {
    const { children, onLoadAuthState } = props;
    const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

    useEffect(() => {
        setIsAuthenticated(onLoadAuthState);
    }, [onLoadAuthState]);

    return <>{children}</>
}

export default AuthStateChecker;
