// Direct SQLite seed using better-sqlite3 (bypasses adapter issues)
const Database = require("better-sqlite3");
const path = require("path");
const { randomBytes } = require("crypto");

const dbPath = path.resolve(__dirname, "dev.db");
const db = new Database(dbPath);

function cuid() {
    return "c" + randomBytes(8).toString("hex");
}

function now() {
    return new Date().toISOString();
}

console.log("Seeding database at:", dbPath);

// Clear existing data
db.prepare("DELETE FROM Event").run();
db.prepare("DELETE FROM CommitteeMember").run();
db.prepare("DELETE FROM GalleryImage").run();

// Seed Committee Members 2026
const memberInsert = db.prepare(`
  INSERT INTO CommitteeMember (id, name, role, year, category, university, bio, linkedinUrl, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const members2026 = [
    ["Dr. Firoz", "Chair", "2026", "EXCOM", "Independent University, Bangladesh", "Dr. Firoz is the Chair of the IEEE CIS Bangladesh Chapter 2026, dedicated to advancing computational intelligence research.", "https://linkedin.com"],
    ["Dr. Aloke", "Vice Chair", "2026", "EXCOM", "University of Dhaka", "Dr. Aloke serves as the Vice Chair, supporting all chapter activities and academic initiatives.", "https://linkedin.com"],
    ["Md Mohsin Kabir", "Secretary", "2026", "EXCOM", "United International University", "Md Mohsin Kabir manages administrative affairs and official communications for the chapter.", "https://linkedin.com"],
    ["Dr. Manjurul", "Research Activity Coordinator", "2026", "EXCOM", "AIUB", "Dr. Manjurul coordinates all research activities and academic collaborations within the chapter.", "https://linkedin.com"],
    ["Arifa Akter Eva", "Treasurer", "2026", "EXCOM", "Independent University, Bangladesh", "Arifa Akter Eva manages the financial operations of the chapter.", "https://linkedin.com"],
    ["Durjoy", "Conference Coordinator", "2026", "EXCOM", "Brac University", "Durjoy coordinates the chapter's conference participation and event planning.", "https://linkedin.com"],
    ["Al Amin", "Membership Development Coordinator", "2026", "EXCOM", "North South University", "Al Amin focuses on growing and developing the chapter's membership base.", "https://linkedin.com"],
    ["Dr. Rashed", "Industrial Activity Coordinator", "2026", "EXCOM", "BUET", "Dr. Rashed bridges academia and industry through chapter programs.", "https://linkedin.com"],
    ["Dr. Murtaja", "Student Activity Coordinator", "2026", "EXCOM", "IUT", "Dr. Murtaja coordinates all student-facing activities and competitions.", "https://linkedin.com"],
    ["Mehedy", "Publicity Coordinator", "2026", "EXCOM", "Jahangirnagar University", "Mehedy manages communications, social media and promotional activities.", "https://linkedin.com"],
    ["Dr. Rajib", "Awards Coordinator", "2026", "EXCOM", "SUST", "Dr. Rajib oversees the recognition and awards programs for the chapter.", "https://linkedin.com"],
    ["Hafiz", "Human Activity Coordinator", "2026", "EXCOM", "East West University", "Hafiz is responsible for volunteer and human resource coordination.", "https://linkedin.com"],
    ["Khaled Masud Babu", "Webpage Administrator", "2026", "EXCOM", "Independent University, Bangladesh", "Khaled Masud Babu maintains the chapter website and digital presence.", "https://linkedin.com"],
    ["Aktarujjaman Akter", "Workshop Coordinator", "2026", "EXCOM", "Daffodil International University", "Aktarujjaman Akter plans and executes technical workshops.", "https://linkedin.com"],
    ["Rajieb", "Web and Graphic Designer", "2026", "EXCOM", "AUST", "Rajieb handles all visual design and branding for the chapter.", "https://linkedin.com"],
    // 2024 Historical
    ["Dr. Syed Akhter Hossain", "Chair", "2024", "EXCOM", "UITS", "Former Chapter Chair 2024.", "https://linkedin.com"],
    ["Dr. Mainul Huq", "Vice Chair", "2024", "EXCOM", "AUST", "Former Vice Chair 2024.", "https://linkedin.com"],
];

for (const [name, role, year, category, university, bio, linkedinUrl] of members2026) {
    memberInsert.run(cuid(), name, role, year, category, university, bio, linkedinUrl, now());
}

// Seed Events
const eventInsert = db.prepare(`
  INSERT INTO Event (id, title, description, date, venue, type, imageUrl, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const events = [
    [
        "IEEE CIS BDC Annual General Meeting (AGM) 2026",
        "Join us for the Annual General Meeting where we reflect on achievements, plan future activities, and welcome new committee members.",
        "2026-01-27T10:00:00.000Z",
        "IUB Auditorium, Independent University Bangladesh",
        "upcoming",
        "/IEEE BDC 01.png",
    ],
    [
        "5th International Science & Robotics Olympiad",
        "A premier international competition bringing together the brightest minds in science and robotics from across the globe.",
        "2025-08-05T10:00:00.000Z",
        "IITR Wallace Dr, Regina, SK, Canada",
        "previous",
        "/IEEE BDC 02.png",
    ],
    [
        "IEEE CIS BDC SYMPOSIUM-24: Extended Abstract Writing Techniques",
        "An intensive workshop on crafting compelling research abstracts for international IEEE conferences and journals.",
        "2024-07-15T10:00:00.000Z",
        "Remote (Online)",
        "previous",
        "/IEEE BDC 03.png",
    ],
];

for (const [title, description, date, venue, type, imageUrl] of events) {
    eventInsert.run(cuid(), title, description, date, venue, type, imageUrl, now());
}

// Seed Gallery Images
const galleryInsert = db.prepare(`
  INSERT INTO GalleryImage (id, title, imageUrl, caption, createdAt)
  VALUES (?, ?, ?, ?, ?)
`);

const gallery = [
    ["Annual General Meeting", "/IEEE BDC 01.png", "2026 AGM at IUB"],
    ["Robotics Olympiad", "/IEEE BDC 02.png", "International Science Competition"],
    ["Research Symposium", "/IEEE BDC 03.png", "Extended Abstract Workshop"],
    ["CIS BDC Chapter Event", "/IEEE BDC 04.png", "Community Event"],
];

for (const [title, imageUrl, caption] of gallery) {
    galleryInsert.run(cuid(), title, imageUrl, caption, now());
}

db.close();
console.log("✅ Database seeded successfully!");
console.log(`  → CommitteeMembers: ${members2026.length}`);
console.log(`  → Events: ${events.length}`);
console.log(`  → Gallery Images: ${gallery.length}`);
