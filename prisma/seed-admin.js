const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
const Database = require("better-sqlite3");
const path = require("path");
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(process.cwd(), "prisma", "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const user = await prisma.user.upsert({
        where: { email: 'admin@ieeecisbd.com' },
        update: {},
        create: {
            email: 'admin@ieeecisbd.com',
            name: 'Super Admin',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log("Success: Admin user seeded", user.email);
}

main()
    .catch((e) => {
        console.error("Error:");
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
