"use client";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { ReactNode, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { usePathname } from "next/navigation";
import { oneTapLogin } from "helpers";
import { toast } from "react-hot-toast";

interface Props {
    children: ReactNode
}

const OneTapLogin = () => {
  const pathname = usePathname();
  const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
        if(isAuthenticating) return;

        setIsAuthenticating(true);
        const loadingToastId = toast.loading("Authenticating...");

        if(!credentialResponse.credential) {
          setIsAuthenticating(false);
          toast.remove(loadingToastId);
          toast.error("No credential received!!");

          return;
        }

        const loginResponse = await oneTapLogin(credentialResponse.credential);

        if(!loginResponse.success) {
          setIsAuthenticating(false);
          toast.remove(loadingToastId);
          toast.error(loginResponse.error ?? "");

          return;
        }

        setIsAuthenticating(false);
        toast.remove(loadingToastId);
        toast.success("Welcome to Confessions...");

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
