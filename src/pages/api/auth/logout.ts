import { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie } from "cookies-next";

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "POST") {
        return res.status(400).json({
            success: false,
            error: "Invalid Request Method"
        });
    }

    try {
        deleteCookie("auth-token", {
            req,
            res
        });

        return res.status(200).json({
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
            error: "Internal Server Error"
        })
    }
};

export default logout;
