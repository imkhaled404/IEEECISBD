"use client";
import { useState } from "react";
import Link from "next/link";

const PLACEHOLDER_MEMBERS = [
    { id: "p1", name: "Chair", role: "Chapter Chair", university: "Add via Admin Panel", imageUrl: null },
    { id: "p2", name: "Vice Chair", role: "Vice Chair", university: "Add via Admin Panel", imageUrl: null },
    { id: "p3", name: "Secretary", role: "Secretary", university: "Add via Admin Panel", imageUrl: null },
    { id: "p4", name: "Treasurer", role: "Treasurer", university: "Add via Admin Panel", imageUrl: null },
];

export default function CommitteeSlider({ members }) {
    const [startIndex, setStartIndex] = useState(0);

    const displayMembers = members && members.length > 0 ? members : PLACEHOLDER_MEMBERS;
    const visibleCount = 4;
    const totalPages = Math.max(1, Math.ceil(displayMembers.length / visibleCount));

    const nextSlide = () => {
        setStartIndex((prev) => {
            const next = prev + visibleCount;
            return next >= displayMembers.length ? 0 : next;
        });
    };

    const prevSlide = () => {
        setStartIndex((prev) => {
            const next = prev - visibleCount;
            return next < 0 ? Math.max(0, displayMembers.length - visibleCount) : next;
        });
    };

    const visibleMembers = displayMembers.slice(startIndex, startIndex + visibleCount);
    const currentPage = Math.floor(startIndex / visibleCount);

    return (
        <div style={{ position: "relative" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(visibleMembers.length, 4)}, 1fr)`,
                gap: "1.5rem",
                minHeight: "320px"
            }}>
                {visibleMembers.map((member) => (
                    <div
                        key={member.id}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 20px rgba(0,98,155,0.08)",
                            padding: "2rem 1.5rem",
                            textAlign: "center",
                            transition: "transform 0.2s, box-shadow 0.2s",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "3px solid #00629B",
                            marginBottom: "1.2rem",
                            flexShrink: 0,
                            background: "#f1f5f9",
                        }}>
                            {member.imageUrl ? (
                                <img src={member.imageUrl} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            ) : (
                                <div style={{
                                    width: "100%", height: "100%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    background: "linear-gradient(135deg, #00629B 0%, #0080bf 100%)",
                                    color: "#fff",
                                    fontSize: "2.5rem",
                                    fontWeight: "700"
                                }}>
                                    {(member.name || "?")[0]}
                                </div>
                            )}
                        </div>

                        <h3 style={{
                            fontSize: "1.05rem",
                            fontWeight: "700",
                            color: "#1a1a1a",
                            marginBottom: "0.4rem",
                            lineHeight: "1.3",
                        }}>{member.name}</h3>

                        <p style={{
                            color: "#00629B",
                            fontWeight: "600",
                            fontSize: "0.8rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "0.4rem",
                        }}>{member.role}</p>

                        {member.university && (
                            <p style={{
                                color: "#64748b",
                                fontSize: "0.78rem",
                                lineHeight: "1.4",
                                marginBottom: "1.2rem",
                                flexGrow: 1
                            }}>{member.university}</p>
                        )}

                        {member.linkedinUrl && (
                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                                    color: "#0077b5", fontSize: "0.78rem", fontWeight: "600",
                                    textDecoration: "none", borderTop: "1px solid #f1f5f9",
                                    paddingTop: "0.75rem", width: "100%", justifyContent: "center"
                                }}>
                                LinkedIn ↗
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation */}
            {displayMembers.length > visibleCount && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
                    <button
                        onClick={prevSlide}
                        style={{
                            width: "44px", height: "44px", borderRadius: "50%",
                            background: "#fff", border: "2px solid #00629B",
                            color: "#00629B", fontSize: "1.2rem", cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,98,155,0.15)",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={e => { e.target.style.background = "#00629B"; e.target.style.color = "#fff"; }}
                        onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.color = "#00629B"; }}
                    >
                        ‹
                    </button>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setStartIndex(i * visibleCount)}
                                style={{
                                    width: i === currentPage ? "2rem" : "0.6rem",
                                    height: "0.6rem",
                                    borderRadius: "999px",
                                    background: i === currentPage ? "#00629B" : "#cbd5e1",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    padding: 0
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        style={{
                            width: "44px", height: "44px", borderRadius: "50%",
                            background: "#00629B", border: "2px solid #00629B",
                            color: "#fff", fontSize: "1.2rem", cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,98,155,0.3)",
                            transition: "all 0.2s"
                        }}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
