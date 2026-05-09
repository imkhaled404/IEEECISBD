import Link from "next/link";

export default function OpeningCISChapter() {
    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Opening a CIS Student Chapter</h1>
                    <p className="large-text">Empower your university with the latest in Computational Intelligence.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2 className="section-title">Requirements</h2>
                            <ul className="benefits-list">
                                <li>Existing IEEE Student Branch at your university.</li>
                                <li>At least 6 IEEE CIS Student Members.</li>
                                <li>An Advisor who is an IEEE CIS Member.</li>
                                <li>Approval from the IEEE CIS Bangladesh Chapter.</li>
                            </ul>
                        </div>
                        <div className="mission-box">
                            <h3>Steps to Apply</h3>
                            <ol className="benefits-list decimal">
                                <li>Gather the required 6 student members.</li>
                                <li>Secure a Faculty Advisor.</li>
                                <li>Fill out the IEEE Chapter Petition Form.</li>
                                <li>Notify the CIS BDC Executive Committee.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
