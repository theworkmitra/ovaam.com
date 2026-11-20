
import { useEffect, useRef } from "react";
import "./solutions-section.css";

const solutions = [
    {
        title: "Business Website",
        description: "Create a professional website for your company and services.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",
        number: "01"
    },
    {
        title: "Online Store",
        description: "Launch your online shop and sell products around the world.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700",
        number: "02"
    },
    {
        title: "Restaurant",
        description: "Show your menu, accept orders and grow your food business.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700",
        number: "03"
    },
    {
        title: "Portfolio",
        description: "Showcase your work, projects and creative skills online.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
        number: "04"
    },
    {
        title: "Agency",
        description: "Build your agency presence and attract new clients.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700",
        number: "05"
    },
    {
        title: "Fashion & Lifestyle",
        description: "Present your fashion brand with a beautiful online experience.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
        number: "06"
    }
];

export default function SolutionsSection({ onLogin }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll("[data-solution-reveal]");

        if (!elements) return;

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) =>
                element.classList.add("is-visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="ovaam-solutions-section"
            id="solutions"
            ref={sectionRef}
        >
            <div className="container-fluid px-4 px-lg-5">

                {/* SECTION HEADING */}
                <div className="ovaam-solutions-heading text-center"
                    data-solution-reveal>

                    <span className="ovaam-solutions-label">
                        SOLUTIONS FOR EVERY BUSINESS
                    </span>

                    <h2>
                        One Platform.
                        <br className="d-md-none" />
                        <span> Endless Possibilities.</span>
                    </h2>

                    <p>
                        Whatever your business idea, OVAAM gives you
                        the tools to build, manage and grow online.
                    </p>

                </div>

                {/* SOLUTION CARDS */}
                <div className="row g-4 ovaam-solutions-grid">

                    {solutions.map((solution, index) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4"
                            key={solution.number}
                            data-solution-reveal
                            style={{
                                "--solution-delay": `${index * 100}ms`
                            }}
                        >
                            <div className="ovaam-solution-card">

                                <div className="ovaam-solution-image">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        loading="lazy"
                                    />

                                    <span className="ovaam-solution-number">
                                        {solution.number}
                                    </span>
                                </div>

                                <div className="ovaam-solution-content">
                                    <h3>{solution.title}</h3>

                                    <p>{solution.description}</p>

                                    <button
                                        type="button"
                                        className="ovaam-solution-link"
                                        onClick={onLogin}
                                    >
                                        Get Started <span>→</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* BOTTOM CTA */}
                <div className="ovaam-solutions-bottom"
                    data-solution-reveal>

                    <div>
                        <h3>Ready to build your online presence?</h3>
                        <p>Start creating your website with OVAAM today.</p>
                    </div>

                    <button
                        type="button"
                        className="btn ovaam-solutions-cta"
                        onClick={onLogin}
                    >
                        Start Building Free <span>→</span>
                    </button>

                </div>

            </div>
        </section>
    );
}
