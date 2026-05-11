import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Standardizing database connection for serverless/Node compatibility
if (typeof window === "undefined") {
    neonConfig.webSocketConstructor = ws;
}

const globalForPrisma = globalThis;

function makePrismaClient() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.warn("[Prisma] Waring: DATABASE_URL not found. Client may fail.");
        return new PrismaClient();
    }

    try {
        console.log("[Prisma] Initializing Neon adapter with Pool...");
        const pool = new Pool({ connectionString });
        const adapter = new PrismaNeon(pool);

        return new PrismaClient({
            adapter,
            log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
        });
    } catch (error) {
        console.error("[Prisma] Failed to initialize client:", error);
        return new PrismaClient();
    }
}

export const prisma = globalForPrisma.prisma ?? makePrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
