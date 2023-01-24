"use client";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { ReactNode } from "react";
import jwtDecode from "jwt-decode";

interface Props {
    children: ReactNode
}

const OneTapProvider = (props: Props) => {

  const { children } = props;

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
        console.log(credentialResponse);

        const info = jwtDecode(credentialResponse.credential ?? "");

        console.log(info);
    },
    onError: () => {
        console.log("Login Failed!!");
    }
  })  

  return <>{children}</>;
};

export default OneTapProvider;
