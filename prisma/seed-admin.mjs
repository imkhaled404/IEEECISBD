import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const prisma = new PrismaClient();

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
