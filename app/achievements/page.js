import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function Achievements() {
    const achievements = await prisma.achievement.findMany({
        orderBy: { year: 'desc' }
    });

    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Achievements</h1>
                    <p className="large-text">Celebrating the milestones and successes of our chapter and its members.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {achievements.length > 0 ? (
                        <div className="timeline">
                            {achievements.map((item) => (
                                <div key={item.id} className="timeline-item">
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-content">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p style={{ fontWeight: '600', color: 'var(--primary)' }}>{item.winner}</p>
                                                <p style={{ fontSize: '0.875rem', color: '#666' }}>{item.category}</p>
                                            </div>
                                            {item.imageUrl && (
                                                <img src={item.imageUrl} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginLeft: '1rem' }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center">No achievements listed yet.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

