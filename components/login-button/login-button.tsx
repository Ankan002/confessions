"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { SiGoogle } from "react-icons/si";
import { login } from "helpers";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { useState } from "react";
import { toast } from "react-hot-toast";

const LoginButton = () => {
  const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const onLoginClickHelper = useGoogleLogin({
    onSuccess: async (token) => {
      setIsAuthenticated(true);

      const toastId = toast.loading("Autheticating...");

      const loginResponse = await login(token.access_token);

      if(!loginResponse.success) {
        setIsAuthenticating(false);
        toast.remove(toastId);
        toast.error(loginResponse.error ?? "");
        return;
      }

      setIsAuthenticating(false);
      toast.remove(toastId);
      toast.success("Welcome to Confessions...");

      setIsAuthenticated(true);
      location.reload();
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onLoginClick = () => {
    if(isAuthenticating) {
      toast.error("Hold on we are authenticating...");
      return;
    }

    onLoginClickHelper();
  }

  return (
    <button
      className="p-2 bg-gradient-to-r from-primary-light-yellow to-primary-dark-yellow dark:from-primary-red border-2 dark:to-primary-violet dark:text-primary-light font-quicksand text-lg tracking-wider font-semibold border-primary-dark dark:border-primary-light mt-5 rounded-md flex items-center justify-center"
      onClick={onLoginClick}
    >
      <SiGoogle className="mr-2 text-2xl" />
      Login With Google
    </button>
  );
};

export default LoginButton;
