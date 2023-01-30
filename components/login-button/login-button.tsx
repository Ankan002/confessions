"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { SiGoogle } from "react-icons/si";

const LoginButton = () => {
  const onLoginClick = useGoogleLogin({
    onSuccess: async (token) => {
      try{
        const userInfoResponse = await fetch(`${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_USERINFO_URI}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token.access_token}`
          }
        });

        const userInfo = await userInfoResponse.json();

        console.log(userInfo);
      }
      catch(error){
        console.log(error);
      }
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
