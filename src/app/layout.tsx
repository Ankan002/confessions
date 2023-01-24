import {
  GoogleAuthProvider,
  OneTapProvider,
  RecoilContextProvider,
  ThemeProvider,
} from "@/components/elements";
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
              <OneTapProvider>{children}</OneTapProvider>
            </GoogleAuthProvider>
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
