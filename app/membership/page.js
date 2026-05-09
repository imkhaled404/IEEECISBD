import Link from "next/link";

export default function Membership() {
    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>PROFESSIONAL GROWTH</p>
                    <h1 className="text-gradient">Join IEEE CIS</h1>
                    <p className="large-text">Unlock the potential of your professional journey by becoming a part of the global IEEE Computational Intelligence Society.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '6rem' }}>
                        <div>
                            <h2 className="section-title">Benefits of Membership</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                                {[
                                    { title: "Global Networking", desc: "Connect with researchers, industry professionals, and students worldwide." },
                                    { title: "Exclusive Resources", desc: "Access to IEEE Transactions on Neural Networks, Fuzzy Systems, and Evolutionary Computation." },
                                    { title: "Professional Growth", desc: "Gain priority access to conferences, workshops, and career development webinars." },
                                    { title: "Recognition", desc: "Be part of the largest professional organization dedicated to AI and CI." }
                                ].map((benefit, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ color: 'var(--primary)', fontSize: '1.5rem', flexShrink: 0 }}>✓</div>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{benefit.title}</h4>
                                            <p style={{ color: 'var(--muted-foreground)' }}>{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: '4rem', background: 'var(--card-bg)', borderRadius: '3rem', border: '1px solid var(--border)', alignSelf: 'start' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>How to Apply</h3>
                            <div className="steps-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {[
                                    "Visit the IEEE Membership portal (ieee.org/membership).",
                                    "Follow the prompts to select 'Student' or 'Professional' status.",
                                    "Choose 'Computational Intelligence Society (CIS)' as your society membership.",
                                    "Complete your payment and profile setup."
                                ].map((step, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                        <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: '#000', fontSize: '0.9rem' }}>{idx + 1}</div>
                                        <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{step}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="https://www.ieee.org/membership/join" target="_blank" className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', textAlign: 'center' }}>
                                Apply on IEEE Portal &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-grid" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container text-center">
                    <h2 className="section-title">Already an IEEE Member?</h2>
                    <p className="large-text">Add Computational Intelligence Society to your membership for a small additional fee.</p>
                    <Link href="https://www.ieee.org/membership/join" className="btn btn-outline" style={{ marginTop: '2rem' }}>Add CIS Membership</Link>
                </div>
            </section>
        </div>
    );
}
