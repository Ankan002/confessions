"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { SiGoogle } from "react-icons/si";
import { login } from "helpers";
import { useSetRecoilState } from "recoil";
import { authAtom } from "atoms";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const setIsAuthenticated = useSetRecoilState<boolean>(authAtom);
  const router = useRouter();

  const onLoginClick = useGoogleLogin({
    onSuccess: async (token) => {
      const loginResponse = await login(token.access_token);

      if(!loginResponse.success) {
        console.log(loginResponse.error);
        return;
      }

      setIsAuthenticated(true);
      router.push("/");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  return (
    <button
      className="p-2 bg-gradient-to-r from-primary-light-yellow to-primary-dark-yellow dark:from-primary-red border-2 dark:to-primary-violet dark:text-primary-light font-quicksand text-lg tracking-wider font-semibold border-primary-dark dark:border-primary-light mt-5 rounded-md flex items-center justify-center"
      onClick={() => onLoginClick()}
    >
      <SiGoogle className="mr-2 text-2xl" />
      Login With Google
    </button>
  );
};

export default LoginButton;
