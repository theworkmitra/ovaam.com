
import { useState, useEffect, useRef } from "react";
import "./extra-sections.css";

const templates = [
    {
        title: "Fashion & Lifestyle",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
    },
    {
        title: "Home & Decor",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700"
    },
    {
        title: "Food & Restaurant",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700"
    },
    {
        title: "Business & Corporate",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700"
    },
    {
        title: "Travel & Tourism",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700"
    },
    {
        title: "Health & Fitness",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700"
    },
    {
        title: "Beauty & Salon",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700"
    },
    {
        title: "Technology",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
    }
];

function StepIcon({ type }) {
    if (type === "template") {
        return (
            <svg viewBox="0 0 64 64" fill="none">
                <rect x="9" y="9" width="46" height="39" rx="5"
                    stroke="currentColor" strokeWidth="3" />
                <path d="M9 20H55"
                    stroke="currentColor" strokeWidth="3" />
                <path d="M19 15H21M27 15H29"
                    stroke="currentColor" strokeWidth="3"
                    strokeLinecap="round" />
                <path d="M43 40L51 57L55 49L62 46L43 40Z"
                    fill="#A5F000" stroke="currentColor" strokeWidth="2" />
            </svg>
        );
    }

    if (type === "edit") {
        return (
            <svg viewBox="0 0 64 64" fill="none">
                <path d="M43 9L55 21L23 53L9 56L12 42L43 9Z"
                    stroke="currentColor" strokeWidth="3"
                    strokeLinejoin="round" />
                <path d="M37 15L49 27"
                    stroke="currentColor" strokeWidth="3" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" fill="none">
            <path d="M34 39L20 53L11 54L12 45L26 31"
                stroke="currentColor" strokeWidth="3"
                strokeLinejoin="round" />
            <path d="M28 36C29 19 42 9 57 8C57 23 48 37 32 39"
                stroke="currentColor" strokeWidth="3"
                strokeLinejoin="round" />
            <path d="M38 23L44 29"
                stroke="currentColor" strokeWidth="3" />
            <path d="M17 42L9 34L19 30"
                stroke="currentColor" strokeWidth="3"
                strokeLinejoin="round" />
            <path d="M29 51L33 42L41 50"
                stroke="currentColor" strokeWidth="3"
                strokeLinejoin="round" />
        </svg>
    );
}

export default function ExtraSections() {
    const [activeSlide, setActiveSlide] = useState(0);
    const sectionsRef = useRef(null);

    // Scroll Reveal Animation
    useEffect(() => {
        const elements =
            sectionsRef.current?.querySelectorAll("[data-reveal]");

        if (!elements) return;

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => {
                element.classList.add("is-visible");
            });
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
                rootMargin: "0px 0px -50px 0px"
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [activeSlide]);

    // Template Slider
    const visibleTemplates = Array.from(
        { length: 4 },
        (_, index) => templates[
            (activeSlide + index) % templates.length
        ]
    );

    const nextSlide = () => {
        setActiveSlide((current) =>
            (current + 1) % templates.length
        );
    };

    const previousSlide = () => {
        setActiveSlide((current) =>
            (current - 1 + templates.length) % templates.length
        );
    };

    return (
        <div className="ovaam-extra-sections" ref={sectionsRef}>

            {/* TEMPLATES SECTION */}
            <section
                className="ovaam-templates-section"
                id="templates"
            >
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row align-items-center g-4">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-3" data-reveal>

                            <div className="ovaam-section-label">
                                TEMPLATES
                            </div>

                            <h2 className="ovaam-section-heading">
                                Choose a Template.
                                <br />
                                Make It Yours.
                            </h2>

                            <p className="ovaam-section-description">
                                Explore professionally designed templates
                                for every business and industry.
                            </p>

                            <a
                                href="#all-templates"
                                className="btn ovaam-explore-btn"
                            >
                                Explore All Templates
                                <span>→</span>
                            </a>

                        </div>

                        {/* RIGHT TEMPLATE SLIDER */}
                        <div className="col-lg-9">

                            <div className="ovaam-template-slider">

                                <button
                                    type="button"
                                    className="ovaam-slider-arrow ovaam-slider-prev"
                                    onClick={previousSlide}
                                    aria-label="Previous templates"
                                >
                                    ‹
                                </button>

                                <div className="row g-3">

                                    {visibleTemplates.map((template) => (
                                        <div
                                            className="col-6 col-md-3"
                                            key={template.title}
                                        >
                                            <a
                                                href="#all-templates"
                                                className="ovaam-template-card"
                                                data-reveal
                                            >
                                                <div className="ovaam-template-image">
                                                    <img
                                                        src={template.image}
                                                        alt={template.title}
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div className="ovaam-template-title">
                                                    {template.title}
                                                </div>
                                            </a>
                                        </div>
                                    ))}

                                </div>

                                <button
                                    type="button"
                                    className="ovaam-slider-arrow ovaam-slider-next"
                                    onClick={nextSlide}
                                    aria-label="Next templates"
                                >
                                    ›
                                </button>

                            </div>

                            {/* SLIDER DOTS */}
                            <div className="ovaam-slider-dots">

                                {templates.map((template, index) => (
                                    <button
                                        type="button"
                                        key={template.title}
                                        className={
                                            activeSlide === index
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Show template ${index + 1}`}
                                    />
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section
                className="ovaam-how-section"
                id="how-it-works"
            >
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row align-items-center g-4">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-3" data-reveal>

                            <div className="ovaam-section-label">
                                HOW IT WORKS
                            </div>

                            <h2 className="ovaam-section-heading">
                                Get Online in
                                <br />
                                3 Simple Steps
                            </h2>

                            <p className="ovaam-section-description">
                                From idea to live website — it's quick,
                                easy and hassle-free.
                            </p>

                        </div>

                        {/* RIGHT STEPS */}
                        <div className="col-lg-9">

                            <div className="row align-items-center g-3">

                                {/* STEP 1 */}
                                <div className="col-md-4">
                                    <div
                                        className="ovaam-step-card"
                                        data-reveal
                                    >
                                        <div className="ovaam-step-icon">
                                            <StepIcon type="template" />
                                        </div>

                                        <div className="ovaam-step-title">
                                            <span className="ovaam-step-number">
                                                1
                                            </span>
                                            <h3>Choose a Template</h3>
                                        </div>

                                        <p>
                                            Pick from 100+ ready-to-use
                                            designs for your business.
                                        </p>
                                    </div>
                                </div>

                                {/* ARROW */}
                                <div className="ovaam-step-arrow d-none d-md-flex col-md-1">
                                    →
                                </div>

                                {/* STEP 2 */}
                                <div className="col-md-3">
                                    <div
                                        className="ovaam-step-card"
                                        data-reveal
                                    >
                                        <div className="ovaam-step-icon">
                                            <StepIcon type="edit" />
                                        </div>

                                        <div className="ovaam-step-title">
                                            <span className="ovaam-step-number">
                                                2
                                            </span>
                                            <h3>Customize</h3>
                                        </div>

                                        <p>
                                            Edit text, images, colors and
                                            layout to match your brand.
                                        </p>
                                    </div>
                                </div>

                                {/* ARROW */}
                                <div className="ovaam-step-arrow d-none d-md-flex col-md-1">
                                    →
                                </div>

                                {/* STEP 3 */}
                                <div className="col-md-3">
                                    <div
                                        className="ovaam-step-card"
                                        data-reveal
                                    >
                                        <div className="ovaam-step-icon">
                                            <StepIcon type="rocket" />
                                        </div>

                                        <div className="ovaam-step-title">
                                            <span className="ovaam-step-number">
                                                3
                                            </span>
                                            <h3>Publish &amp; Grow</h3>
                                        </div>

                                        <p>
                                            Go live with one click and
                                            start reaching your customers.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
