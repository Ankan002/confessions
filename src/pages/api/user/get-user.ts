import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { JwtPayloadUser } from "@/types/general";
import { getPrismaClient } from "@/config/prisma";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const authCookie = getCookie("auth-token", {
        req,
        res
    })?.toString() as string;

    try {
        const { id } = jwt.verify(authCookie, process.env.JWT_SECRET ?? "") as JwtPayloadUser;

        console.log(id)

        const prismaClient = getPrismaClient();

        const userData = await prismaClient.user.findUnique({
            where: {
                id
            }
        });

        return res.status(200).json({
            success: true,
            data: {
                user: userData
            }
        });
    }
    catch(error){
        if(error instanceof Error) {
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

export default getUser;
