import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest){
    if(request.nextUrl.pathname === "/api/auth/login" || request.nextUrl.pathname === "/api/auth/one-tap-login") {
        const authToken = request.cookies.get("auth-token");

        if(authToken) {
            return NextResponse.json({
                success: false,
                error: "You are already logged in..."
            }, {
                status: 401
            });
        }

        return NextResponse.next();
    }

    if(request.nextUrl.pathname === "/api/auth/logout" || request.nextUrl.pathname.startsWith("/api/user")) {
        const authToken = request.cookies.get("auth-token");

        if(!authToken){
            return NextResponse.json({
                success: false,
                error: "Access Denied"
            }, {
                status: 401
            });
        }
    }

    return NextResponse.next();
}
