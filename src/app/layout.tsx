import {
  GoogleAuthProvider,
  OneTapProvider,
  RecoilContextProvider,
  ThemeProvider,
  AuthStateChecker,
} from "@/components/elements";
import { ThemeToggler } from "@/components/theme-toggler";
import { cookies } from "next/headers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextCookies = cookies();
  const authCookie = nextCookies.has("auth-token");

  return (
    <html lang="en">
      <head />
      <body>
        <RecoilContextProvider>
          <AuthStateChecker onLoadAuthState={authCookie}>
            <ThemeProvider>
              <GoogleAuthProvider>
                <OneTapProvider>
                  {children}
                  <ThemeToggler />
                </OneTapProvider>
              </GoogleAuthProvider>
            </ThemeProvider>
          </AuthStateChecker>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
