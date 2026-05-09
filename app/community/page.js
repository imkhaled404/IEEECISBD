import Link from "next/link";

export default function CommunityHub() {
    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>CONNECT & GROW</p>
                    <h1 className="text-gradient">Community & Outreach</h1>
                    <p className="large-text">Bridging the gap between students, researchers, and industry leaders through meaningful collaboration.</p>
                </div>
            </section>

            {/* 1. Join IEEE CIS */}
            <section id="join" className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title">Join IEEE CIS</h2>
                            <p className="large-text">Unlock the potential of your professional journey by becoming a part of the global IEEE Computational Intelligence Society.</p>
                            <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
                                {[
                                    { title: "Global Networking", desc: "Connect with researchers and students worldwide." },
                                    { title: "Exclusive Resources", desc: "Access to IEEE Transactions and top journals." },
                                    { title: "Professional Growth", desc: "Priority access to workshops and webinars." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✦</span>
                                        <p><strong style={{ color: 'var(--primary)' }}>{item.title}:</strong> {item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/membership" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More About Membership</Link>
                        </div>
                        <div style={{ padding: '3rem', background: 'var(--card-bg)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>How to Apply</h3>
                            <ol style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
                                <li>Visit the IEEE Membership portal (ieee.org).</li>
                                <li>Select 'Student' or 'Professional' status.</li>
                                <li>Choose 'Computational Intelligence Society (CIS)'.</li>
                                <li>Complete your payment and profile.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Student Chapters */}
            <section id="chapters" className="section bg-card">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Student Chapters</h2>
                        <p className="max-w-600 mx-auto">Our student chapters are the driving force of innovation within Bangladesh.</p>
                    </div>
                    <div className="grid-3" style={{ marginTop: '4rem' }}>
                        <div className="info-card" style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Active Chapters</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Currently established in premier universities across the nation.</p>
                            <Link href="/chapters" className="link">View All Chapters &rarr;</Link>
                        </div>
                        <div className="info-card" style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Start a Chapter</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Establish a CIS footprint at your university to gain leadership into the AI ecosystem.</p>
                            <Link href="/contact" className="link">Get Guidelines &rarr;</Link>
                        </div>
                        <div className="info-card" style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Benefits</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Get official recognition, access to IEEE funding for events, and global mentorship.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Volunteer With Us */}
            <section id="volunteer" className="section">
                <div className="container">
                    <div style={{ background: 'var(--primary)', padding: '5rem', borderRadius: '3rem', color: '#000' }}>
                        <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000' }}>Volunteer With Us</h2>
                                <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Make a difference in the Bangladeshi tech ecosystem by contributing to our growth.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                {['Event Management', 'Technical Content', 'Publicity', 'Graphic Design'].map(role => (
                                    <div key={role} style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '1rem', fontWeight: 'bold', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center" style={{ marginTop: '4rem' }}>
                            <Link href="/contact" className="btn" style={{ background: '#000', color: '#fff', padding: '1rem 3rem' }}>Apply to Volunteer</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Sponsorship */}
            <section id="sponsorship" className="section bg-grid">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Sponsorship</h2>
                        <p className="large-text">Partner with us to connect with high-talent researchers and industry leaders.</p>
                    </div>
                    <div className="grid-2" style={{ marginTop: '4rem', gap: '4rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Why Partner With Us?</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                                <li>
                                    <strong style={{ color: 'var(--primary)' }}>Branding:</strong> High visibility at our national workshops and symposiums.
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--primary)' }}>Recruitment:</strong> Direct access to the brightest minds in CI and AI in Bangladesh.
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--primary)' }}>Innovation:</strong> Showcase your company's technology to an audience of experts.
                                </li>
                            </ul>
                        </div>
                        <div style={{ padding: '3rem', background: 'var(--card-bg)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Partnership Tiers</h3>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                {['Platinum', 'Gold', 'Silver'].map(tier => (
                                    <div key={tier} style={{ flex: 1, padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: 'bold', background: 'var(--card-bg-alt)' }}>{tier}</div>
                                ))}
                            </div>
                            <p style={{ marginBottom: '2rem' }}>Contact our Industrial Activity Coordinator for our Sponsorship Prospectus.</p>
                            <Link href="mailto:cis.bd@ieee.org" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Request Prospectus</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. News & Gallery */}
            <section id="news" className="section bg-card">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)' }}>Latest News</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>May 2026</p>
                                    <h4 style={{ margin: '0.5rem 0' }}>ExCom Nominations Open</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Shape the future of Computational Intelligence in Bangladesh.</p>
                                </div>
                                <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>April 2026</p>
                                    <h4 style={{ margin: '0.5rem 0' }}>Workshop on Deep Learning</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Recap of our highly successful session at IUB.</p>
                                </div>
                            </div>
                            <Link href="/blogs" className="link" style={{ marginTop: '2rem', display: 'block' }}>View Blogs & Archive &rarr;</Link>
                        </div>
                        <div style={{ padding: '4rem', background: 'var(--card-bg)', borderRadius: '3rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📷</div>
                            <h3>Photo Gallery</h3>
                            <p style={{ marginBottom: '2rem' }}>Visual highlights from our workshops and networking sessions.</p>
                            <Link href="/gallery" className="btn btn-outline" style={{ border: '2px solid var(--primary)' }}>Visit Gallery Archive</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
