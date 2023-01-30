"use client";
import { SiGoogle } from "react-icons/si";

const LoginButton = () => {
  return (
    <button className="p-2 bg-gradient-to-r from-primary-dark-yellow to-primary-light-yellow dark:from-primary-pink border-2 dark:to-primary-violet dark:text-primary-light font-quicksand text-lg tracking-wider font-semibold border-primary-dark dark:border-primary-light mt-5 rounded-md flex items-center justify-center">
      <SiGoogle className="mr-2 text-2xl" />
      Login With Google
    </button>
  );
};

export default LoginButton;
