import { prisma } from "../../lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Chapters() {
    let chapters = [];
    try {
        chapters = await prisma.chapter.findMany({
            orderBy: { name: 'asc' }
        });
    } catch (e) {
        console.error("Prisma Chapters Fetch Error:", e);
    }

    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>ACADEMIC COLLABORATION</p>
                    <h1 className="text-gradient">Student Chapters</h1>
                    <p className="large-text">Our student chapters are the driving force of innovation within Bangladesh, fostering excellence in CI and AI.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Current Student Chapters</h2>
                        <p className="large-text">Connect with a CIS chapter at your university.</p>
                    </div>

                    {chapters.length > 0 ? (
                        <div className="grid-3" style={{ marginTop: '4rem' }}>
                            {chapters.map((chapter) => (
                                <div key={chapter.id} className="info-card" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--card-bg-alt)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem' }}>🎓</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{chapter.name}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>Chair: {chapter.chair || 'To be announced'}</p>
                                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.8 }}>"Insert brief inspirational quote/message"</p>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <Link href={`mailto:${chapter.emails || 'cis.bd@ieee.org'}`} className="link" style={{ fontSize: '0.85rem' }}>Connect &rarr;</Link>
                                        {chapter.websiteUrl && <Link href={chapter.websiteUrl} target="_blank" className="link" style={{ fontSize: '0.85rem' }}>Website</Link>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ marginTop: '3rem', padding: '4rem', textAlign: 'center', background: 'var(--card-bg)', border: '1px dotted var(--border)', borderRadius: '2rem' }}>
                            <p className="large-text">Updating our chapter database. Please check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section bg-card">
                <div className="container">
                    <div className="grid-2" style={{ gap: '6rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title">Start a Student Chapter</h2>
                            <p className="large-text" style={{ marginBottom: '2rem' }}>
                                Establish a CIS footprint at your university to gain leadership, funding, and networking opportunities.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Benefits</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Get official recognition, access to IEEE funding for events, and global mentorship.</p>
                                </div>
                                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Guidelines</h4>
                                    <p style={{ fontSize: '0.9rem' }}>Email our Student Activity Coordinator at <span style={{ color: 'var(--primary)', fontWeight: '600' }}>cis.bd@ieee.org</span> with a proposal featuring your core committee and initial goals.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '4rem', background: 'var(--primary)', color: '#000', borderRadius: '3rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#000' }}>Ready to Innovate?</h3>
                            <p style={{ marginBottom: '2.5rem', fontWeight: '500' }}>Download our chapter starter kit and begin your leadership journey today.</p>
                            <Link href="/contact" className="btn" style={{ background: '#000', color: '#fff', padding: '1rem 2.5rem' }}>Start Your Chapter Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
