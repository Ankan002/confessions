export const oneTapLogin = async (credentialsToken: string) => {
    try {
        const oneTapLoginAPIResponse = await fetch("/api/auth/one-tap-login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                credentialsToken
            }),
            credentials: "include"
        });

        const loginStatusData = await oneTapLoginAPIResponse.json();

        if(!loginStatusData.success) {
            return {
                success: loginStatusData.sucess,
                error: loginStatusData.error,
            };
        }

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
