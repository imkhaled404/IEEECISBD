import Link from "next/link";

export default function About() {
    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>LEARN MORE</p>
                    <h1 className="text-gradient">About IEEE CIS Bangladesh Chapter</h1>
                    <p className="large-text">Advancing the theory, design, application, and development of biologically and linguistically motivated computational paradigms.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="section bg-card">
                <div className="container">
                    <div className="grid-2" style={{ gap: '6rem' }}>
                        <div>
                            <h2 className="section-title">The Global Context</h2>
                            <p className="large-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                The IEEE Computational Intelligence Society (CIS) traces its roots to the early development of neural networks in the late 1980s. Originally formed as the IEEE Neural Networks Council (NNC) in 1989, it evolved to encompass the broader fields of fuzzy systems and evolutionary computation. In 2004, the society was officially renamed the IEEE Computational Intelligence Society to reflect its comprehensive focus on nature-inspired computational paradigms.
                            </p>
                        </div>
                        <div>
                            <h2 className="section-title">Our Chapter</h2>
                            <p className="large-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                The IEEE CIS Bangladesh Chapter was established to serve as the local nexus for this global community. Since our founding, we have been dedicated to fostering a vibrant ecosystem for researchers, students, and industry professionals in Bangladesh, providing a platform to bridge the gap between academic theory and real-world AI applications.
                            </p>
                            <div style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--primary)', background: 'var(--card-bg-alt)' }}>
                                <p style={{ fontStyle: 'italic', color: 'var(--muted-foreground)' }}>Founded in [Insert Year]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem' }}>
                        <div className="info-card" style={{ padding: '4rem', background: 'var(--card-bg)', borderRadius: '2.5rem', border: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                To promote excellence in Computational Intelligence (CI) research and applications across Bangladesh. We strive to provide a collaborative environment that empowers our members through education, networking, and professional development in areas including neural networks, fuzzy systems, evolutionary computation, and hybrid intelligent systems.
                            </p>
                        </div>
                        <div className="info-card" style={{ padding: '4rem', background: 'var(--primary)', borderRadius: '2.5rem', color: '#000' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#000' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '500' }}>
                                To be the premier community in Bangladesh for advancing intelligent technologies, driving innovation that solves local challenges, and connecting our brightest minds with the global IEEE CIS research network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* By the Numbers */}
            <section className="section bg-grid" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title text-gradient">By the Numbers</h2>
                        <p className="large-text">Our impact across the engineering landscape of Bangladesh</p>
                    </div>
                    <div className="grid-5" style={{ marginTop: '4rem' }}>
                        {[
                            { label: 'Year Founded', value: '[Year]' },
                            { label: 'Professional Members', value: '[Number]' },
                            { label: 'Student Branches', value: '[Number]' },
                            { label: 'Technical Events', value: '[Number]' },
                            { label: 'Industry Partners', value: '[Number]' }
                        ].map((stat, idx) => (
                            <div key={idx} style={{ textAlign: 'center', padding: '2rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                                <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
                                <p style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Focus Areas</h2>
                        <p className="large-text">We champion innovation in the following domains</p>
                    </div>
                    <div className="grid-2" style={{ gap: '3rem' }}>
                        <div className="focus-box" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Neural Networks & Deep Learning</h4>
                            <p>Architectures that mimic human cognitive processes, enabling machines to learn from complex data.</p>
                        </div>
                        <div className="focus-box" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Fuzzy Systems</h4>
                            <p>Intelligent frameworks for decision-making under uncertainty and linguistic information processing.</p>
                        </div>
                        <div className="focus-box" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Evolutionary Computation</h4>
                            <p>Nature-inspired optimization for complex engineering problems and automated design.</p>
                        </div>
                        <div className="focus-box" style={{ padding: '2.5rem', background: 'var(--card-bg)', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Emerging AI Paradigms</h4>
                            <p>Exploring the intersection of AI with Data Science, IoT, robotics, and cross-disciplinary applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-card-alt">
                <div className="container text-center">
                    <h2 className="section-title">Ready to Join Us?</h2>
                    <p className="max-w-600 mx-auto mb-4">Become part of the most vibrant computational intelligence community in Bangladesh.</p>
                    <Link href="/membership" className="btn btn-primary">Join IEEE CIS BDC &rarr;</Link>
                </div>
            </section>
        </div>
    );
}
