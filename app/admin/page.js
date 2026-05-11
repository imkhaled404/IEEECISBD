import { prisma } from '../../lib/prisma';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
    // Fetch counts for dashboard
    const [teamCount, eventCount, chapterCount, achievementCount, galleryCount, blogCount, sliderCount] = await Promise.all([
        prisma.committeeMember.count(),
        prisma.event.count(),
        prisma.chapter.count(),
        prisma.achievement.count(),
        prisma.galleryImage.count(),
        prisma.blogPost.count(),
        prisma.heroSlider.count(),
    ]);

    const stats = [
        { name: 'Committee Members', count: teamCount, href: '/admin/team' },
        { name: 'Events', count: eventCount, href: '/admin/events' },
        { name: 'Chapters', count: chapterCount, href: '/admin/chapters' },
        { name: 'Achievements', count: achievementCount, href: '/admin/achievements' },
        { name: 'Gallery Photos', count: galleryCount, href: '/admin/gallery' },
        { name: 'Blog Posts', count: blogCount, href: '/admin/blogs' },
        { name: 'Hero Slider', count: sliderCount, href: '/admin/hero' },
    ];

    return (
        <div>
            <div className="admin-header">
                <h1 className="text-gradient">Admin Overview</h1>
                <p style={{ color: 'var(--admin-text-muted)' }}>Welcome back, administrator.</p>
            </div>

            <div className="stats-grid">
                {stats.map((stat) => (
                    <Link key={stat.name} href={stat.href} className="stat-card" style={{ textDecoration: 'none' }}>
                        <span className="label">{stat.name}</span>
                        <span className="value">{stat.count}</span>
                    </Link>
                ))}
            </div>

            <div className="admin-card">
                <h2 style={{ marginBottom: '1rem' }}>Get Started</h2>
                <p style={{ color: 'var(--admin-text-muted)', lineHeight: '1.7' }}>
                    Welcome to the IEEE CS BDC Administration Console. From here, you can manage every aspect of your chapter's digital presence.
                    Updates made here are synchronized in real-time across the platform.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                    <Link href="/admin/team" className="btn-primary">Manage Committee</Link>
                    <Link href="/admin/events" className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--admin-border)' }}>Manage Events</Link>
                </div>
            </div>
        </div>
    );
}
