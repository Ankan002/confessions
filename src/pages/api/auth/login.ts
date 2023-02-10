import { getPrismaClient } from "@/config/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { addDays } from "date-fns";

const RequestBodySchema = z.object({
    provider_id: z.string(),
    email: z.string(),
    name: z.string(),
    profile_pic: z.string(),
});

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "POST") {
        return res.status(400).json({
            success: false,
            error: "Invalid Request Method"
        });
    }

    try {
        const requestBodySchemaValidationResult = RequestBodySchema.safeParse(
            req.body
          );
      
          if (!requestBodySchemaValidationResult.success) {
            return res.status(400).json({
              success: false,
              error: requestBodySchemaValidationResult.error.errors[0].message,
            });
          }
      
          const requestPayload = requestBodySchemaValidationResult.data;
        const prismaClient = getPrismaClient();

        const user = await prismaClient.user.findUnique({
            where: {
                provider_id: requestPayload.provider_id
            },
            select: {
                id: true,
                email: true,
            }
        });

        if(user){
            const authToken = jwt.sign({user}, process.env["JWT_SECRET"] ?? "", {
                expiresIn: process.env["JWT_EXPIRATION_TIME"] ?? ""
            });

            setCookie("auth-token", authToken, {
                httpOnly: true,
                expires: addDays(new Date(), Number(process.env["COOKIE_EXPIRATION_TIME"]) ?? 0),
                secure: process.env["NODE_ENV"] === "production" ? true : false,
                req,
                res
            });

            return res.status(200).json({
                success: true,
            });
        }

        const newUser = await prismaClient.user.create({
            data: {
                name: requestPayload.name,
                email: requestPayload.email,
                provider_id: requestPayload.provider_id,
                profile_pic: requestPayload.profile_pic
            },
            select: {
                id: true,
                email: true,
            }
        });

        const authToken = jwt.sign({user: newUser}, process.env["JWT_SECRET"] ?? "", {
            expiresIn: process.env["JWT_EXPIRATION_TIME"] ?? ""
        });

        setCookie("auth-token", authToken, {
            httpOnly: true,
            expires: addDays(new Date(), Number(process.env["COOKIE_EXPIRATION_TIME"]) ?? 0),
            secure: process.env["NODE_ENV"] === "production" ? true : false,
            req,
            res
        });

        res.status(200).json({
            success: true
        });
    }
    catch(error) {
        if(error instanceof Error){
            return res.status(400).json({
                success: false,
                error: error.message
            });
        }

        return res.status(500).json({
            success: false,
            error: "Internal Server Error!!"
        });
    }
};

export default login;
