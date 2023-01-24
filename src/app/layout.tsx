import {
  GoogleAuthProvider,
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
            <GoogleAuthProvider>{children}</GoogleAuthProvider>
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
