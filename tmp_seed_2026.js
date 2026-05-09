const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(process.cwd(), "dev.db");
const betterSqlite = new Database(dbPath);
const adapter = new PrismaBetterSqlite3(betterSqlite);
const prisma = new PrismaClient({ adapter });

async function main() {
    const members = [
        { name: "Dr. Firoz", role: "Chair", year: "2026", university: "Independent University, Bangladesh", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Firoz is a dedicated professional serving as the Chair for the IEEE CIS Bangladesh Chapter in 2026. With a strong background in Independent University, Bangladesh, they are committed to advancing computational intelligence in the region through various initiatives and collaborations." },
        { name: "Dr. Aloke", role: "Vice Chair", year: "2026", university: "University of Dhaka", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Aloke is a dedicated professional serving as the Vice Chair for the IEEE CIS Bangladesh Chapter in 2026." },
        { name: "Md Mohsin Kabir", role: "Secretary", year: "2026", university: "United International University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Md Mohsin Kabir is a dedicated professional serving as the Secretary for the IEEE CIS Bangladesh Chapter in 2026." },
        { name: "Dr. Manjurul", role: "Research Activity Coordinator", year: "2026", university: "AIUB", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Manjurul is a dedicated professional serving as the Research Activity Coordinator." },
        { name: "Arifa Akter Eva", role: "Treasurer", year: "2026", university: "Independent University, Bangladesh", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Arifa Akter Eva is a dedicated professional serving as the Treasurer." },
        { name: "Durjoy", role: "Conference Coordinator", year: "2026", university: "Brac University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Durjoy is a dedicated professional serving as the Conference Coordinator." },
        { name: "Al Amin", role: "Membership Development Coordinator", year: "2026", university: "North South University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Al Amin is a dedicated professional serving as the Membership Development Coordinator." },
        { name: "Dr. Rashed", role: "Industrial Activity Coordinator", year: "2026", university: "BUET", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Rashed is a dedicated professional serving as the Industrial Activity Coordinator." },
        { name: "Dr. Murtaja", role: "Student Activity Coordinator", year: "2026", university: "IUT", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Murtaja is a dedicated professional serving as the Student Activity Coordinator." },
        { name: "Mehedy", role: "Publicity Coordinator", year: "2026", university: "Jahangirnagar University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Mehedy is a dedicated professional serving as the Publicity Coordinator." },
        { name: "Dr. Rajib", role: "Awards Coordinator", year: "2026", university: "SUST", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Dr. Rajib is a dedicated professional serving as the Awards Coordinator." },
        { name: "Hafiz", role: "Human Activity Coordinator", year: "2026", university: "East West University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Hafiz is a dedicated professional serving as the Human Activity Coordinator." },
        { name: "Khaled Masud Babu", role: "Webpage Administrator", year: "2026", university: "Independent University, Bangladesh", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Khaled Masud Babu is a dedicated professional serving as the Webpage Administrator." },
        { name: "Aktarujjaman Akter", role: "Workshop Coordinator", year: "2026", university: "Daffodil International University", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Aktarujjaman Akter is a dedicated professional serving as the Workshop Coordinator." },
        { name: "Rajieb", role: "Web and Graphic Designer", year: "2026", university: "AUST", category: "EXCOM", linkedinUrl: "https://linkedin.com", bio: "Rajieb is a dedicated professional serving as the Web and Graphic Designer." }
    ];

    await prisma.committeeMember.deleteMany({ where: { year: "2026" } });

    for (const member of members) {
        await prisma.committeeMember.create({ data: member });
    }

    console.log('2026 Committee Seeded Successfully');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        betterSqlite.close();
    });
