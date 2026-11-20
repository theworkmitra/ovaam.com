
import { useEffect, useRef } from "react";
import "./ecommerce-features.css";

const ecommerceBenefits = [
    { icon: "bag", title: "Product & Inventory Management" },
    { icon: "card", title: "Secure Payments & Checkout" },
    { icon: "users", title: "Order & Customer Management" },
    { icon: "tag", title: "Discounts, Coupons & Offers" },
    { icon: "truck", title: "Shipping & Tax Configuration" }
];

const features = [
    { icon: "window", title: "Drag & Drop Editor" },
    { icon: "globe", title: "Custom Domain" },
    { icon: "lock", title: "SSL Security" },
    { icon: "chart", title: "SEO Tools" },
    { icon: "file", title: "Blog & Content" },
    { icon: "analytics", title: "Analytics & Reports" },
    { icon: "megaphone", title: "Marketing Tools" },
    { icon: "clock", title: "24/7 Support" }
];

function FeatureIcon({ type }) {
    const paths = {
        bag: <><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
        card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></>,
        users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5"/></>,
        tag: <><path d="M20 13 13 20 3 10V4h6l11 9Z"/><circle cx="7.5" cy="8" r="1"/></>,
        truck: <><path d="M3 6h12v12H3zM15 10h4l3 4v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
        window: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.1M10 6.5h.1"/></>,
        globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
        lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3"/></>,
        chart: <><path d="M3 20V12M9 20V8M15 20V4M21 20V2"/></>,
        file: <><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7"/></>,
        analytics: <><path d="M3 3v18h18"/><path d="m7 14 4-4 3 2 6-7"/></>,
        megaphone: <><path d="m3 11 18-7v16L3 13zM7 14l2 7h4l-2-7"/></>,
        clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></>
    };

    return (
        <svg
            className="ovaam-feature-icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {paths[type]}
        </svg>
    );
}

export default function EcommerceFeatures({ onLogin }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current?.querySelectorAll("[data-ecom-reveal]");

        if (!elements) return;

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
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
        <div className="ovaam-ecommerce-section" ref={sectionRef}>

            {/* ECOMMERCE BANNER */}
            <section className="ovaam-ecommerce-banner" id="ecommerce">

                <div className="ovaam-ecommerce-banner-inner">

                    {/* LEFT CONTENT */}
                    <div className="ovaam-ecommerce-copy" data-ecom-reveal>
                        <span className="ovaam-ecommerce-label">
                            eCOMMERCE
                        </span>

                        <h2>
                            Turn Your Business
                            <br />
                            Into an Online Store
                        </h2>

                        <p>
                            Everything you need to sell online — products,
                            payments, orders, inventory and more.
                        </p>

                        <button
                            className="btn ovaam-ecommerce-cta"
                            onClick={onLogin}
                        >
                            Start Selling Online <span>→</span>
                        </button>
                    </div>

                    {/* STORE PREVIEW */}
                    <div className="ovaam-ecommerce-preview" data-ecom-reveal>

                        <div className="ovaam-order-notification">
                            <span className="ovaam-order-bag">
                                <FeatureIcon type="bag" />
                            </span>
                            <span>
                                <strong>Order #07842</strong>
                                <small>New Order</small>
                            </span>
                        </div>

                        <div className="ovaam-store-laptop">
                            <div className="ovaam-store-screen">

                                <div className="ovaam-store-toolbar">
                                    <strong>◉ OVAAM Store</strong>
                                    <span>Home　 Shop　 About　 Contact</span>
                                    <span className="ovaam-store-cart">🛒</span>
                                </div>

                                <div className="ovaam-store-content">
                                    <div className="ovaam-store-heading">
                                        <span>OUR COLLECTION</span>
                                        <h3>Discover Your Style</h3>
                                        <p>Explore our latest products</p>
                                    </div>

                                    <div className="ovaam-store-products">
                                        <div className="ovaam-store-product">
                                            <div className="ovaam-product-art ovaam-headphone">🎧</div>
                                            <strong>Headphones</strong>
                                            <small>₹1,499</small>
                                            <span>Add to Cart</span>
                                        </div>

                                        <div className="ovaam-store-product">
                                            <div className="ovaam-product-art ovaam-watch">⌚</div>
                                            <strong>Smart Watch</strong>
                                            <small>₹2,499</small>
                                            <span>Add to Cart</span>
                                        </div>

                                        <div className="ovaam-store-product">
                                            <div className="ovaam-product-art ovaam-shoe">👟</div>
                                            <strong>Sports Shoes</strong>
                                            <small>₹1,999</small>
                                            <span>Add to Cart</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ovaam-store-laptop-base" />
                        </div>

                    </div>

                    {/* RIGHT BENEFITS */}
                    <div className="ovaam-ecommerce-benefits" data-ecom-reveal>
                        {ecommerceBenefits.map((item) => (
                            <div className="ovaam-ecommerce-benefit" key={item.title}>
                                <span className="ovaam-ecommerce-benefit-icon">
                                    <FeatureIcon type={item.icon} />
                                </span>
                                <strong>{item.title}</strong>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="ovaam-features-section" id="features">

                <div className="container-fluid px-4 px-lg-5">
                    <div className="row align-items-center g-4">

                        <div className="col-lg-4" data-ecom-reveal>
                            <span className="ovaam-features-label">
                                FEATURES
                            </span>

                            <h2 className="ovaam-features-heading">
                                Everything You Need
                                <br />
                                to Build, Manage and Grow
                            </h2>

                            <p className="ovaam-features-description">
                                A complete toolkit to create beautiful websites,
                                run your online store and grow your business.
                            </p>
                        </div>

                        <div className="col-lg-8">
                            <div className="row g-3">
                                {features.map((feature, index) => (
                                    <div
                                        className="col-12 col-sm-6 col-lg-3"
                                        key={feature.title}
                                        data-ecom-reveal
                                        style={{ "--ecom-delay": `${index * 80}ms` }}
                                    >
                                        <div className="ovaam-feature-card">
                                            <span className="ovaam-feature-card-icon">
                                                <FeatureIcon type={feature.icon} />
                                            </span>
                                            <strong>{feature.title}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}
