import {
    GoogleAuthProvider,
    OneTapProvider,
    RecoilContextProvider,
    ThemeProvider,
    AuthStateChecker,
    CustomToaster,
} from "@/components/elements";
import { ProfileFetcher } from "@/components/profile-fetcher";
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
                                    <ProfileFetcher />
                                    {children}
                                    <ThemeToggler />
                                    <CustomToaster />
                                </OneTapProvider>
                            </GoogleAuthProvider>
                        </ThemeProvider>
                    </AuthStateChecker>
                </RecoilContextProvider>
            </body>
        </html>
    );
}
