import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";
import path from "path";

const globalForPrisma = globalThis;

function makePrismaClient() {
    try {
        const dbPath = path.resolve(process.cwd(), "prisma", "dev.db");
        const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
        return new PrismaClient({ adapter });
    } catch (e) {
        console.error("Prisma client init failed:", e.message);
        return null;
    }
}

export const prisma = globalForPrisma.prisma ?? makePrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
