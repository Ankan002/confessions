import { z } from "zod";

export const DecryptedGoogleUserSchema = z.object({
    aud: z.string().optional(),
    azp: z.string().optional(),
    email: z.string(),
    email_verified: z.boolean(),
    exp: z.number().optional(),
    family_name: z.string().optional(),
    given_name: z.string().optional(),
    iat: z.number().optional(),
    iss: z.string().optional(),
    jti: z.string().optional(),
    name: z.string(),
    nbf: z.number().optional(),
    picture: z.string(),
    sub: z.string(),
});
