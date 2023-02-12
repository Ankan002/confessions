import { z } from "zod";

const SuccessResponseSchema = z.object({
    success: z.boolean(),
    data: z.object({
        user: z.object({
            id: z.string(),
            name: z.string(),
            provider_id: z.string(),
            email: z.string(),
            profile_pic: z.string(),
            banned: z.boolean(),
            active: z.boolean(),
        }),
    }),
});

const ErrorResponseSchema = z.object({
    success: z.boolean(),
    error: z.string(),
});

export const getUser = async () => {
    try {
        const response = await fetch("/api/user/get-user", {
            method: "GET",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
        });

        const userResponse = await response.json();

        if (!userResponse.success) {
            const errorResponseValidationResult =
                ErrorResponseSchema.safeParse(userResponse);

            if (errorResponseValidationResult.success === false) {
                return {
                    success: false,
                    error: errorResponseValidationResult.error.errors[0]
                        .message,
                };
            }

            return {
                success: errorResponseValidationResult.data.success,
                error: errorResponseValidationResult.data.error,
            };
        }

        const successResponseValidationResult =
            SuccessResponseSchema.safeParse(userResponse);

        if (successResponseValidationResult.success === false) {
            return {
                success: false,
                error: successResponseValidationResult.error.errors[0].message,
            };
        }

        const { data: userData } = successResponseValidationResult;

        return {
            success: userData.success,
            user: userData.data.user,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: false,
            error: "Internal Server Error!!",
        };
    }
};
