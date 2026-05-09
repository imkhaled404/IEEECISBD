"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || pathname === '/login';
  if (isAdminPage) return null;

  return (
    <footer style={{ background: "#1a3a4a", color: "#fff" }}>
      <div className="container" style={{ padding: "4rem 2rem 2rem" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {/* IEEE logo circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontWeight: "900",
                  fontSize: "0.6rem",
                  flexShrink: 0,
                  lineHeight: "1.2",
                  textAlign: "center",
                }}
              >
                IEEE<br />CIS
              </div>
              <div>
                <p style={{ fontWeight: "700", fontSize: "0.85rem", lineHeight: "1.3", color: "#fff" }}>
                  IEEE<br />COMPUTATIONAL<br />INTELLIGENCE SOCIETY
                </p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>Bangladesh Chapter</p>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", maxWidth: "280px" }}>
              IEEE Computational Intelligence Society is the world&apos;s leading membership organization dedicated to the advancement of bio-inspired computational paradigms. Serving members worldwide to advance the state of the art.
            </p>
          </div>

          {/* IEEE CS BDC */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "1.25rem", color: "#fff" }}>IEEE CIS BDC</h4>
            {[
              { label: "About us", href: "/about" },
              { label: "Contact us", href: "/contact" },
              { label: "Membership", href: "/membership" },
              { label: "Events", href: "/events" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.75rem", transition: "color 0.2s" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Digital Library */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "1.25rem", color: "#fff" }}>Digital Library</h4>
            {[
              { label: "Magazines", href: "#" },
              { label: "Journals", href: "#" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.75rem", transition: "color 0.2s" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Computing Resources */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "1.25rem", color: "#fff" }}>Computing Resources</h4>
            {[
              { label: "Jobs", href: "#" },
              { label: "Education", href: "#" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.75rem", transition: "color 0.2s" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Community Resources */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "1.25rem", color: "#fff" }}>Community Resources</h4>
            {[
              { label: "Organize a Conference", href: "/contact" },
              { label: "Communities", href: "/community" },
              { label: "Chapters", href: "/chapters" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: "0.75rem", transition: "color 0.2s" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            © Copyright 2026 IEEE CIS BDC. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { label: "in", href: "https://linkedin.com/company/ieeecisbdc" },
              { label: "f", href: "https://facebook.com/ieeecisbdc" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  transition: "background 0.2s",
                  textDecoration: "none",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
