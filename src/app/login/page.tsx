import loginImage from "assets/images/login-image.png";
import Image from "next/image";

const Login = () => {
  return (
    <main className="min-h-screen flex flex-col bg-primary-light dark:bg-secondary-dark justify-center items-center px-6 py-2">
      <Image src={loginImage.src} width={250} height={250} className="object-contain" alt="" />

      <h1 className="text-white mt-3 font-quicksand text-3xl">
        Confessions
      </h1>
    </main>
  );
};

export default Login;
