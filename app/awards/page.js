export default function Awards() {
    const awards = [
        { name: "Distinguished Lecturer Award", category: "Academic", description: "For exceptional contributions to computational intelligence education." },
        { name: "Outstanding Student Volunteer", category: "Service", description: "Awarded to the most active student volunteer of the year." },
        { name: "Best Research Paper Award", category: "Research", description: "Given at the annual CIS Bangladesh Symposium." },
    ];

    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Awards</h1>
                    <p className="large-text">Recognizing excellence in research, service, and innovation.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {awards.map((award, index) => (
                            <div key={index} className="stat-card accent">
                                <h3>{award.name}</h3>
                                <div className="badge">{award.category}</div>
                                <p>{award.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-grid">
                <div className="container text-center">
                    <h2 className="section-title">Nominations Open</h2>
                    <p>Know someone who deserves recognition? Submit your nominations for the 2024 awards cycle.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Nominate Now
                    </Link>
                </div>
            </section>
        </div>
    );
}

import Link from "next/link";
