"use client";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { ReactNode } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { usePathname } from "next/navigation";
import { oneTapLogin } from "helpers";

interface Props {
    children: ReactNode
}

const OneTapLogin = () => {
  const pathname = usePathname();
  const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
        if(!credentialResponse.credential) return;

        const loginResponse = await oneTapLogin(credentialResponse.credential);

        if(!loginResponse.success) {
          console.log(loginResponse.error);
          return;
        }

        setIsAuthenticated(true);

        if(pathname === "/login" && window !== undefined) {
          location.reload();
        }
    },
    onError: () => {
        console.log("Login Failed!!");
    }
  });
  
  
  return <></>;
}

const OneTapProvider = (props: Props) => {

  const { children } = props;
  const isAuthenticated = useRecoilValue<boolean>(authAtom);

  return (
    <>
      {
        !isAuthenticated && (
          <OneTapLogin />
        )
      }
      {children}
    </>
  );
};

export default OneTapProvider;
