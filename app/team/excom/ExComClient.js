"use client";

import { useState, useEffect } from "react";
import MemberCard from "../../../components/MemberCard";

export default function ExComClient({ dbMembers = [] }) {
    const [selectedYear, setSelectedYear] = useState("2026");
    const [selectedMember, setSelectedMember] = useState(null);
    const members = dbMembers.filter(m => String(m.year) === String(selectedYear));

    const openProfile = (member) => {
        setSelectedMember(member);
    };

    const closeProfile = () => {
        setSelectedMember(null);
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-grid">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="section-title text-gradient">Executive Committee</h1>
                    <p className="large-text">Leadership driving the mission of IEEE CIS Bangladesh Chapter</p>

                    <div className="year-selector" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '3rem'
                    }}>
                        {["2026", "2025", "2024"].map(year => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`btn ${selectedYear === year ? 'btn-primary' : 'btn-outline'}`}
                                style={{ minWidth: '100px' }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {members.length > 0 ? (
                    <div className="grid-3">
                        {members.map(member => (
                            <MemberCard key={member.id} member={member} onOpenProfile={openProfile} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20" style={{ background: 'var(--card-bg)', borderRadius: '2rem', border: '1px dotted var(--border)' }}>
                        <p className="large-text">Records for {selectedYear} are currently being archived.</p>
                    </div>
                )}
            </div>

            {/* Profile Modal */}
            {selectedMember && (
                <div className="modal-overlay" onClick={closeProfile} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '2rem',
                    backdropFilter: 'blur(4px)'
                }}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{
                        background: 'var(--card-secondary)',
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-xl)',
                        position: 'relative',
                        animation: 'modalFadeIn 0.3s ease-out'
                    }}>
                        <button onClick={closeProfile} style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            color: 'var(--muted-foreground)'
                        }}>&times;</button>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', padding: '3rem' }}>
                            <div>
                                <div style={{ width: '100%', aspectRatio: '1', borderRadius: '1.5rem', overflow: 'hidden', border: '3px solid var(--primary)', marginBottom: '1.5rem' }}>
                                    {selectedMember.imageUrl ? (
                                        <img src={selectedMember.imageUrl} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ background: 'var(--card-bg-alt)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>👤</div>
                                    )}
                                </div>
                                <a href={selectedMember.linkedinUrl} target="_blank" className="btn btn-primary" style={{ width: '100%', fontSize: '0.8rem' }}>LinkedIn Profile</a>
                            </div>

                            <div>
                                <p style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{selectedMember.role}</p>
                                <h2 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{selectedMember.name}</h2>
                                <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>{selectedMember.university}</p>

                                <h4 style={{ marginBottom: '1rem' }}>Biography</h4>
                                <p style={{ lineHeight: '1.8', color: 'var(--muted-foreground)' }}>{selectedMember.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </main>
    );
}
