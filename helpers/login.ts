import { z } from "zod";

const GoogleUserInfoSchema = z.object({
    email: z.string(),
    email_verified: z.boolean(),
    family_name: z.string().optional(),
    given_name: z.string().optional(),
    locale: z.string().optional(),
    name: z.string(),
    picture: z.string(),
    sub: z.string(),
});

export const login = async (googleAccessToken: string) => {
    try{
        const googleUserResponse = await fetch(`${process.env["NEXT_PUBLIC_GOOGLE_OAUTH_USERINFO_URI"]}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${googleAccessToken}`
            }
        });

        const googleUserReceived = await googleUserResponse.json();

        const googleUserInfoVerificationResult = GoogleUserInfoSchema.safeParse(googleUserReceived);

        if(!googleUserInfoVerificationResult.success){
            return {
                success: false,
                error: googleUserInfoVerificationResult.error.errors[0].message
            }
        }

        const googleUserInfo = googleUserInfoVerificationResult.data;

        const loginAPIResponse = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                provider_id: googleUserInfo.sub,
                email: googleUserInfo.email,
                name: googleUserInfo.name,
                profile_pic: googleUserInfo.picture
            })
        });

        const loginStatusData = await loginAPIResponse.json();

        if(!loginStatusData.success) return {
            success: loginStatusData.success,
            error: loginStatusData.error
        };

        return {
            success: loginStatusData.success
        };
    }
    catch(error){
        if(error instanceof Error){
            return {
                success: false,
                error: error.message
            };
        }

        return {
            success: false,
            error: "Internal Server Error!!"
        };
    }
};
