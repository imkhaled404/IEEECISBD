const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.resolve(process.cwd(), "prisma", "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    try {
        const members = await prisma.committeeMember.findMany();
        console.log("Success:", members.length, "members");
        console.log(members);
    } catch (e) {
        console.error("Error:");
        console.error(e);
    }
}
main();
