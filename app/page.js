import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import CommitteeSlider from "../components/CommitteeSlider";
import Link from "next/link";
import { prisma } from "../lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let events = [];
  let team = [];
  let chapters = [];
  let gallery = [];

  try {
    const [eventsData, teamData, chaptersData, galleryData] = await Promise.all([
      prisma.event.findMany({
        take: 3,
        orderBy: { date: "desc" },
      }),
      prisma.committeeMember.findMany({
        where: { category: "EXCOM" },
        orderBy: { order: "asc" },
      }),
      prisma.chapter.findMany({
        orderBy: { name: "asc" },
      }),
      prisma.galleryImage.findMany({
        take: 4,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    events = eventsData;
    team = teamData;
    chapters = chaptersData.map(ch => ({
      name: ch.name,
      tag: ch.name.split(' ').map(w => w[0]).join('').toUpperCase() // Fallback tag generator
    }));
    gallery = galleryData;
  } catch (e) {
    console.error("Prisma Fetch Error:", e);
  }

  return (
    <div style={{ background: "#fff" }}>
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHO WE ARE */}
      <section className="section" style={{ background: "#fff", borderBottom: "1px solid #f1f5f9" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ display: "inline-block", color: "#00629B", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                Who We Are
              </span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "#1a1a1a" }}>
                IEEE Computer Society Bangladesh Chapter
              </h2>
              <p style={{ color: "#64748b", lineHeight: "1.8", marginBottom: "2rem" }}>
                The IEEE Computer Society Bangladesh Chapter is a vibrant community of tech enthusiasts and leaders dedicated to advancing the boundaries of computation, bridging industry and academia, and enhancing professional development.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                <div style={{ borderLeft: "3px solid #f1a119", paddingLeft: "1rem" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.25rem" }}>Our Mission</h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b" }}>To promote excellence in Computer Science research and professional growth.</p>
                </div>
                <div style={{ borderLeft: "3px solid #00629B", paddingLeft: "1rem" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.25rem" }}>Our Vision</h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b" }}>Empowering the future through sustainable computing across Bangladesh.</p>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary" style={{ background: "#00629B" }}>
                Read Our Story &rarr;
              </Link>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "12px solid #fff", boxShadow: "0 40px 80px rgba(0,0,0,0.15)" }}>
                <img src="/IEEE BDC 01.png" alt="Committee" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "#00629B", color: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,98,155,0.3)" }}>
                <p style={{ fontSize: "1.5rem", fontWeight: "800", lineHeight: "1" }}>2026</p>
                <p style={{ fontSize: "0.65rem", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.1em" }}>Exec. Committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE COMMITTEE SLIDER */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "#00629B", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>Our Leadership</span>
            <h2 style={{ fontSize: "2.75rem", fontWeight: "800", color: "#1a1a1a" }}>
              IEEE Computer Society BDC <span style={{ color: "#f1a119" }}>2026</span>
            </h2>
            <div style={{ width: "60px", height: "4px", background: "#f1a119", margin: "1.5rem auto" }} />
          </div>

          <CommitteeSlider members={team.length > 0 ? team : []} />

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/team/excom" className="btn btn-outline" style={{ border: "2px solid #00629B", color: "#00629B" }}>
              Meet The Full Committee
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP & STATS */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "5rem", alignItems: "center", marginBottom: "4rem" }}>
            <div style={{ position: "relative" }}>
              <img src="/IEEE BDC 03.png" alt="Membership" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
              <div style={{ position: "absolute", top: "20px", left: "20px", background: "rgba(255,255,255,0.9)", padding: "1rem", borderRadius: "8px", backdropFilter: "blur(4px)" }}>
                <p style={{ color: "#00629B", fontWeight: "800", fontSize: "1.25rem" }}>Benefits</p>
                <p style={{ fontSize: "0.7rem", fontWeight: "600", color: "#64748b" }}>IEEE CIS Membership</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem" }}>IEEE CS BDC Membership</h2>
              <p style={{ color: "#64748b", marginBottom: "2rem", lineHeight: "1.7" }}>Join the global community of computer scientists and access premier technical periodicals, proceedings, and professional development programs.</p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  { icon: "🎓", title: "Professional Development", desc: "Access workshops with industry experts." },
                  { icon: "📚", title: "Digital Library Access", desc: "TAP INTO IEEE Xplore for the latest research." },
                  { icon: "🌍", title: "Global Networking", desc: "Connect with 400k+ IEEE members worldwide." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.25rem" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.85rem", color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/membership" className="btn btn-primary" style={{ marginTop: "2rem", background: "#00629B" }}>
                Become a Member
              </Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", borderTop: "1px solid #e2e8f0", paddingTop: "4rem" }}>
            {[
              { num: "46+", label: "Seminars" },
              { num: "68+", label: "Webinars" },
              { num: "27+", label: "Workshops" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "3.5rem", fontWeight: "800", color: "#00629B", marginBottom: "0.5rem" }}>{num}</p>
                <p style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em", color: "#64748b" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENTS & ACTIVITIES */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
            <div>
              <span style={{ color: "#00629B", fontWeight: "700", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.75rem" }}>Activities</span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1a1a1a" }}>Latest Events &amp; Activities</h2>
            </div>
            <Link href="/events" style={{ color: "#00629B", fontWeight: "700", fontSize: "0.9rem", borderBottom: "2px solid #00629B", paddingBottom: "2px" }}>
              View All &rarr;
            </Link>
          </div>
          <div className="grid-3">
            {(events.length > 0 ? events : [
              { id: "fallback-1", title: "IEEE CIS BDC AGM 2026", date: "Jan 27, 2026", venue: "IUB, Bangladesh", imageUrl: "/IEEE BDC 01.png" },
              { id: "fallback-2", title: "Int'l Robotics Olympiad", date: "Aug 05, 2025", venue: "Regina, Canada", imageUrl: "/IEEE BDC 02.png" },
              { id: "fallback-3", title: "Research Symposium", date: "Jul 15, 2024", venue: "Remote", imageUrl: "/IEEE BDC 03.png" },
            ]).map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid #f1f5f9" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "800" }}>Experience the Best Moments<br />with IEEE Computer Society Gallery</h2>
            <p style={{ color: "#64748b", lineHeight: "1.7" }}>See photos from our past events and community activities across Bangladesh.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {(gallery.length > 0 ? gallery : [
              { imageUrl: "/IEEE BDC 01.png" },
              { imageUrl: "/IEEE BDC 02.png" },
              { imageUrl: "/IEEE BDC 03.png" },
              { imageUrl: "/IEEE BDC 04.png" }
            ]).map((img, i) => (
              <div key={i} style={{ height: "200px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <img src={img.imageUrl} alt="Gallery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/gallery" className="btn btn-primary" style={{ background: "#00629B" }}>View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* 7. CHAPTERS */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}>Connecting Minds: Our Influential Local Chapters</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1.5rem" }}>
            {chapters.map((ch, i) => (
              <div key={i} className="chapter-logo-card" style={{ padding: "1.5rem", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#00629B", fontSize: "0.6rem", margin: "0 auto 0.75rem" }}>{ch.tag}</div>
                <p style={{ fontSize: "0.65rem", fontWeight: "700", color: "#475569", lineHeight: "1.4" }}>{ch.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ background: "#00629B", borderRadius: "24px", padding: "4rem", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.25rem" }}>Ready to join the global community?</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2.5rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto 2.5rem" }}>Unlock exclusive resources and professional networking by becoming a member today.</p>
            <Link href="/membership" className="btn" style={{ background: "#f1a119", color: "#000", padding: "1.1rem 3rem", fontSize: "1.1rem", fontWeight: "700" }}>Join Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
