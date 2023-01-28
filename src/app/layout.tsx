import {
  GoogleAuthProvider,
  OneTapProvider,
  RecoilContextProvider,
  ThemeProvider,
} from "@/components/elements";
import { ThemeToggler } from "@/components/theme-toggler";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <RecoilContextProvider>
          <ThemeProvider>
            <GoogleAuthProvider>
              <OneTapProvider>
                {children}
                <ThemeToggler />
              </OneTapProvider>
            </GoogleAuthProvider>
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
