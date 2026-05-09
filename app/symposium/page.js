export default function Symposium() {
    return (
        <div className="page-wrapper">
            <section className="page-header bg-grid">
                <div className="container">
                    <h1 className="text-gradient">IEEE CIS BDC Symposium 2025</h1>
                    <p>Advancing Intelligence Through Global Collaboration</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div className="mission-box">
                            <h2>About the Symposium</h2>
                            <p>The IEEE CIS Bangladesh Chapter International Symposium is our flagship technical event. It brings together researchers, industry experts, and students from across the globe to share insights on neural networks, fuzzy systems, and evolutionary computation.</p>
                        </div>
                        <div>
                            <h2 className="section-title">Key Themes</h2>
                            <ul className="benefits-list">
                                <li>Deep Learning and Neural Architectures</li>
                                <li>Fuzzy Control Systems and Robotics</li>
                                <li>Evolutionary Multi-objective Optimization</li>
                                <li>Explainable AI (XAI) and Ethics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-card">
                <div className="container text-center">
                    <h2 className="section-title">Call for Participation</h2>
                    <p className="max-600 mx-auto">Registration for the 2025 Symposium will open in early April. Stay tuned for dates and venue announcements.</p>
                    <div className="hero-btns mt-4 justify-center">
                        <button className="btn btn-primary">Download Brochure</button>
                        <button className="btn btn-outline">Notify Me</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
