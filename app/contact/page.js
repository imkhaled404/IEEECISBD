"use client";

import Link from "next/link";

export default function ContactPage() {
    const coordinators = [
        { role: "General Inquiries", email: "info@cisbd.org" },
        { role: "Membership & Student Chapters", email: "student.activity@cisbd.org" },
        { role: "Sponsorship & Industrial Relations", email: "industry.liaison@cisbd.org" },
        { role: "Website & Technical Support", email: "webmaster@cisbd.org" }
    ];

    const socials = [
        { name: "LinkedIn", link: "#", icon: "🔗" },
        { name: "Facebook", link: "#", icon: "👥" },
        { name: "Twitter/X", link: "#", icon: "🐦" },
        { name: "YouTube", link: "#", icon: "📺" }
    ];

    return (
        <div className="page-wrapper">
            <section className="page-header bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>REACH OUT</p>
                    <h1 className="text-gradient">Contact Us</h1>
                    <p className="large-text">We would love to hear from you. Whether you are a student, researcher, or industry partner, please reach out!</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '6rem' }}>
                        {/* Info Column */}
                        <div className="contact-info-grid">
                            <div className="info-group" style={{ marginBottom: '4rem' }}>
                                <h2 className="section-title">Get in Touch</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                        <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border)' }}>📧</div>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Email</h4>
                                            <p className="large-text" style={{ fontSize: '1.2rem', fontWeight: '600' }}>cis.bd@ieee.org</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                        <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border)' }}>📍</div>
                                        <div>
                                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>Address</h4>
                                            <p style={{ lineHeight: '1.6' }}>[Department/Building Name]<br />[University Name]<br />[City, Postal Code], Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group" style={{ marginBottom: '4rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Reach Out to Our Team</h3>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    {coordinators.map((coord, i) => (
                                        <div key={i} style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{coord.role}</span>
                                            <Link href={`mailto:${coord.email}`} className="link" style={{ fontSize: '0.85rem' }}>{coord.email}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="info-group">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Stay Connected</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    {socials.map((social, i) => (
                                        <Link key={i} href={social.link} className="social-pill" style={{ padding: '1rem', background: 'var(--card-secondary)', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px solid var(--border)' }}>
                                            <span>{social.icon}</span>
                                            <span style={{ fontWeight: '500' }}>{social.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div style={{ padding: '4rem', background: 'var(--card-bg)', borderRadius: '3rem', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Send Us a Message</h2>
                            <p style={{ color: 'var(--muted-foreground)', marginBottom: '3rem' }}>Have a question? Fill out the form below and we'll get back to you.</p>

                            <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                                    <input type="text" placeholder="Your name" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card-bg-alt)' }} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
                                    <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card-bg-alt)' }} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Subject</label>
                                    <input type="text" placeholder="What is this regarding?" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card-bg-alt)' }} />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Message</label>
                                    <textarea placeholder="Tell us more about your inquiry..." rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card-bg-alt)', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', fontSize: '1rem', marginTop: '1rem' }}>Send Message &rarr;</button>
                            </form>

                            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Office Hours</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                                    Our executive committee works remotely across institutions. We aim to respond to all inquiries within 2-3 business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
