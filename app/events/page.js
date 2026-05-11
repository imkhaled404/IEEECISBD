import { prisma } from "../../lib/prisma";
import EventCard from "../../components/EventCard";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EventsPage({ searchParams }) {
    const params = await searchParams;
    const type = params.type || 'upcoming';

    let events = [];
    try {
        events = await prisma.event.findMany({
            where: { type },
            orderBy: { date: type === 'upcoming' ? 'asc' : 'desc' }
        });
    } catch (error) {
        console.error("Prisma Events Fetch Error:", error);
    }

    return (
        <div className="page-wrapper">
            <section className="page-header bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>CONNECT & LEARN</p>
                    <h1 className="text-gradient">Events and Activities</h1>
                    <p className="large-text">Bridging the gap between researchers and professionals through technical excellence.</p>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Upcoming Events</h2>
                        <p className="large-text">Join our upcoming workshops and technical competitions.</p>
                    </div>
                    {events.length > 0 ? (
                        <div className="grid-3" style={{ marginTop: '3rem' }}>
                            {events.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    ) : (
                        <div className="card" style={{ padding: '4rem', textAlign: 'center', background: 'var(--card-bg)', border: '1px dotted var(--border)', borderRadius: '2rem' }}>
                            <p className="large-text">New events are currently being planned. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Conferences Section */}
            <section className="section bg-card">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Conferences</h2>
                        <p className="large-text">Showcasing academic excellence through local and international platforms.</p>
                    </div>

                    <div className="grid-2" style={{ marginTop: '4rem', gap: '4rem' }}>
                        <div className="conference-box" style={{ padding: '3rem', background: 'var(--card-secondary)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Upcoming Conferences</h3>
                            <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>[Conference Name]</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>🗓 [Date] | 📍 [Location]</p>
                                <p style={{ marginBottom: '1.5rem' }}>[Brief overview of the conference theme and goals.]</p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Register</button>
                                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Submit Paper</button>
                                </div>
                            </div>
                        </div>

                        <div className="conference-box" style={{ padding: '3rem', background: 'var(--card-secondary)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Past Conferences</h3>
                            <div style={{ opacity: 0.8 }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>[Conference Name]</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>📅 [Year] | Theme: [Theme]</p>
                                <p style={{ marginBottom: '1.5rem' }}>Impact: [Key statistics: number of papers, attendees, collaborations.]</p>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>View Archive &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Activities Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Past Activities and Highlights</h2>
                        <p className="large-text">Explore our journey of fostering collaboration and knowledge sharing.</p>
                    </div>

                    <div className="grid-2" style={{ marginTop: '3rem', gap: '2rem' }}>
                        {[1, 2].map(i => (
                            <div key={i} style={{ display: 'flex', gap: '2rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)', alignItems: 'center' }}>
                                <div style={{ width: '120px', height: '120px', borderRadius: '1rem', background: 'var(--card-bg-alt)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', border: '1px solid var(--border)' }}>✨</div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>[Event/Project Title]</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>[Date]</p>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Outcomes: [Key achievements, attendees, or collaborative projects.]</p>
                                    <Link href="/gallery" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem' }}>View Gallery &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section bg-grid" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Event Categories</h2>
                        <p className="large-text">Diverse activities to engage our computational intelligence community.</p>
                    </div>
                    <div className="grid-3" style={{ marginTop: '4rem', gap: '2rem' }}>
                        {[
                            { title: 'Technical Workshops', desc: 'Hands-on sessions focused on deep learning frameworks and optimization tools.' },
                            { title: 'Distinguished Lecture Series', desc: 'Guest talks by world-renowned experts in Computational Intelligence.' },
                            { title: 'Hackathons & Competitions', desc: 'Collaborative events to solve real-world problems through AI.' },
                            { title: 'Industry-Academia Meetups', desc: 'Forums designed to bridge research and industrial application.' },
                            { title: 'IEEE Symposiums', desc: 'Platforms for student researchers to present their work.' }
                        ].map((cat, idx) => (
                            <div key={idx} className="category-card" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)', transition: 'transform 0.3s ease' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>✦</span> {cat.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call for Proposals */}
            <section className="section">
                <div className="container">
                    <div style={{ background: 'var(--primary)', padding: '5rem', borderRadius: '3rem', textAlign: 'center', color: '#000' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000' }}>Call for Proposals</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: '500' }}>
                            Are you interested in collaborating with us? We are always looking for passionate speakers and partners to drive innovation.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>Contact us</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>cis.bd@ieee.org</p>
                            </div>
                            <div style={{ width: '2px', height: '40px', background: 'rgba(0,0,0,0.2)' }}></div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>Subject line</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>Event Proposal - [Title]</p>
                            </div>
                        </div>
                        <a href="mailto:cis.bd@ieee.org" className="btn" style={{ marginTop: '3rem', background: '#000', color: '#fff', padding: '1rem 2.5rem' }}>Send Email</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
