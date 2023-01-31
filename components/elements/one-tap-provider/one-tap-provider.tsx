"use client";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { ReactNode } from "react";
import jwtDecode from "jwt-decode";
import { useRecoilValue } from "recoil";
import { authAtom } from "atoms";

interface Props {
    children: ReactNode
}

const OneTapLogin = () => {

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
        console.log(credentialResponse);

        const info = jwtDecode(credentialResponse.credential ?? "");

        console.log(info);
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
