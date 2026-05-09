'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Committee Members', href: '/admin/team' },
    { name: 'Events', href: '/admin/events' },
    { name: 'Chapters', href: '/admin/chapters' },
    { name: 'Achievements', href: '/admin/achievements' },
    { name: 'Gallery', href: '/admin/gallery' },
    { name: 'Blogs', href: '/admin/blogs' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="admin-sidebar">
            <h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--admin-primary)' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
                IEEE CIS Admin
            </h1>
            <nav className="admin-nav">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`admin-nav-item ${pathname === item.href ? 'active' : ''}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/" className="admin-nav-item">
                    <span>←</span> Back to Website
                </Link>
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="admin-nav-item"
                    style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#f87171'
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Logout
                </button>
            </div>
        </aside>
    );
}
