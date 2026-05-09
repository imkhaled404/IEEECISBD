"use client";

import { useState } from "react";

export default function ApplicationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        eventName: "",
        organizer: "",
        date: "",
        venue: "",
        description: "",
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="page-wrapper">
            <section className="page-header bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Application for T-CSP</h1>
                    <p>Technical Co-Sponsorship Request Form</p>
                </div>
            </section>

            <section className="section">
                <div className="container max-600">
                    <div className="stepper">
                        <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                    </div>

                    <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                        {step === 1 && (
                            <div className="form-step">
                                <h2>Event Details</h2>
                                <div className="input-group">
                                    <label>Event Name</label>
                                    <input type="text" placeholder="Enter event name" />
                                </div>
                                <div className="input-group">
                                    <label>Organizing Institute</label>
                                    <input type="text" placeholder="University or Department" />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={nextStep}>Next Step</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="form-step">
                                <h2>Logistics</h2>
                                <div className="input-group">
                                    <label>Proposed Date</label>
                                    <input type="date" />
                                </div>
                                <div className="input-group">
                                    <label>Venue</label>
                                    <input type="text" placeholder="Building/Room No." />
                                </div>
                                <div className="btn-row">
                                    <button type="button" className="btn btn-outline" onClick={prevStep}>Back</button>
                                    <button type="submit" className="btn btn-accent">Submit Application</button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}
