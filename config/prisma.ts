import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null;

export const getPrismaClient = () => {
    if(!prismaInstance) prismaInstance = new PrismaClient();

    return prismaInstance;
};
