import loginImage from "assets/images/login-image.png";
import Image from "next/image";
import { LoginButton } from "@/components/login-button";

const Login = () => {
  return (
    <main className="min-h-screen flex flex-col bg-primary-light dark:bg-secondary-dark justify-center items-center px-6 py-2">
      <Image
        src={loginImage.src}
        width={200}
        height={200}
        className="object-contain"
        alt=""
      />

      <h1 className="text-white mt-3 font-fira-code text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary-violet to-primary-red  dark:from-primary-red dark:to-primary-dark-yellow">
        Confessions
      </h1>

      <p className="mt-2 font-quicksand text-xl text-primary-dark dark:text-primary-light tracking-wider text-center">
        Login to confess with us anonymously...
      </p>

      <LoginButton />
    </main>
  );
};

export default Login;
