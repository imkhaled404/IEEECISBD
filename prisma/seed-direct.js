require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcryptjs');

async function seed() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();
        console.log("Connected to Neon via pg!");

        const hashedPassword = await bcrypt.hash('admin123', 10);
        const email = 'admin@ieeecisbd.com';
        const name = 'Super Admin';
        const role = 'ADMIN';

        // Check if user exists
        const res = await client.query('SELECT id FROM "User" WHERE email = $1', [email]);

        if (res.rows.length === 0) {
            await client.query(
                'INSERT INTO "User" (id, name, email, password, role, "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, NOW(), NOW())',
                ['admin-user-id-' + Date.now(), name, email, hashedPassword, role]
            );
            console.log("Success: Admin user seeded directly via SQL.");
        } else {
            console.log("Admin user already exists.");
        }

    } catch (err) {
        console.error("Direct seeding failed!");
        console.error(err);
    } finally {
        await client.end();
    }
}

seed();
