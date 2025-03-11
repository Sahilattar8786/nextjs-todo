import { PrismaClient } from "@prisma/client";

// Singleton pattern for Prisma Client to avoid multiple instances
const prismaClientSingleton = () => {
    return new PrismaClient();
};

// TypeScript declaration to make `globalThis.prisma` available globally in the app
declare global {
    var prisma: undefined | ReturnType <typeof prismaClientSingleton>;
}

// Use the singleton instance, or use the global prisma if it already exists
const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
}

export default prisma;
