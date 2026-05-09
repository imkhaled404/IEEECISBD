"use client";

import { useState } from "react";
import MemberCard from "./MemberCard";

export default function CommitteeSlider({ members }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = {
        desktop: 4,
        tablet: 2,
        mobile: 1
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    if (!members || members.length === 0) return null;

    return (
        <div className="committee-slider" style={{ position: "relative", overflow: "hidden", padding: "0 10px" }}>
            <div
                style={{
                    display: "flex",
                    gap: "1.5rem",
                    transition: "transform 0.5s ease",
                    transform: `translateX(-${currentIndex * (100 / 4)}%)`
                }}
            >
                {members.map((member) => (
                    <div
                        key={member.id}
                        style={{
                            flex: "0 0 calc(25% - 1.125rem)",
                            minWidth: "280px"
                        }}
                    >
                        <MemberCard member={member} />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 10
                }}
            >
                &lsaquo;
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 10
                }}
            >
                &rsaquo;
            </button>

            {/* CSS for responsive behavior would go in components.css */}
        </div>
    );
}
