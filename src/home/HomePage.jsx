import ExtraSections from "./ExtraSections";
import EcommerceFeatures from "./EcommerceFeatures";
import SolutionsSection from "./SolutionsSection";
import { useState } from "react";
import "./home.css";

export default function HomePage({ onLogin }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState("");

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenSubmenu("");
    };

    const toggleSubmenu = (name) => {
        setOpenSubmenu((current) => current === name ? "" : name);
    };

    const menuGroups = [
        {
            name: "Website Builder",
            links: [
                ["Drag & Drop Builder", "#website-builder"],
                ["Website Features", "#features"],
                ["Custom Domain", "#features"],
                ["Website Design", "#templates"]
            ]
        },
        {
            name: "eCommerce",
            links: [
                ["Online Store", "#ecommerce"],
                ["Product Management", "#ecommerce"],
                ["Payment & Shipping", "#ecommerce"],
                ["Order Management", "#ecommerce"]
            ]
        },
        {
            name: "Solutions",
            links: [
                ["Business Website", "#solutions"],
                ["Online Shopping Store", "#solutions"],
                ["Small Business", "#solutions"],
                ["Professional Services", "#solutions"]
            ]
        }
    ];

    return (
        <main className="ovaam-home" id="home">

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg ovaam-navbar">
                <div className="container-fluid ovaam-nav-container">

                    <a className="navbar-brand ovaam-brand" href="#home">
                        <img
                            src="https://ik.imagekit.io/0fw9yuy2p/logooo.png"
                            alt="OVAAM"
                            onError={(event) => {
                                event.currentTarget.style.display = "";
                            }}
                        />
                    </a>

                    {/* DESKTOP NAVIGATION */}
                    <div className="ovaam-desktop-nav d-none d-lg-flex">

                        <ul className="navbar-nav mx-auto ovaam-menu">

                            <li className="nav-item">
                                <a className="nav-link active" href="#home">
                                    Home
                                </a>
                            </li>

                            {menuGroups.map((group) => (
                                <li
                                    className="nav-item ovaam-desktop-dropdown"
                                    key={group.name}
                                >
                                    <button
                                        type="button"
                                        className="nav-link ovaam-desktop-dropdown-toggle"
                                    >
                                        {group.name}
                                        <span className="ovaam-chevron">⌄</span>
                                    </button>

                                    <div className="ovaam-desktop-submenu">
                                        {group.links.map(([label, href]) => (
                                            <a href={href} key={label}>
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                </li>
                            ))}

                            <li className="nav-item">
                                <a className="nav-link" href="#templates">
                                    Templates
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#features">
                                    Features
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                    Pricing
                                </a>
                            </li>

                        </ul>

                        <div className="ovaam-nav-actions">
                            <button
                                className="btn ovaam-login-btn"
                                onClick={onLogin}
                            >
                                Log In
                            </button>

                            <button
                                className="btn ovaam-start-btn"
                                onClick={onLogin}
                            >
                                Get Started Free
                            </button>
                        </div>

                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        className="ovaam-hamburger d-lg-none"
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(true)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </nav>

            {/* MOBILE DRAWER */}
            {menuOpen && (
                <div className="ovaam-drawer-wrapper">

                    <div
                        className="ovaam-drawer-overlay"
                        onClick={closeMenu}
                    />

                    <aside className="ovaam-drawer">

                        {/* DRAWER HEADER */}
                        <div className="ovaam-drawer-header">

                            <a
                                href="#home"
                                className="ovaam-drawer-brand"
                                onClick={closeMenu}
                            >
                                <img
                                    src="/ovaam-logo.png"
                                    alt="OVAAM"
                                    onError={(event) => {
                                        event.currentTarget.style.display = "none";
                                    }}
                                />
                                <span>OVAAM</span>
                            </a>

                            <button
                                className="ovaam-drawer-close"
                                type="button"
                                aria-label="Close menu"
                                onClick={closeMenu}
                            >
                                &times;
                            </button>

                        </div>

                        {/* DRAWER MENU */}
                        <div className="ovaam-drawer-body">

                            <a
                                className="ovaam-drawer-link"
                                href="#home"
                                onClick={closeMenu}
                            >
                                Home
                            </a>

                            {menuGroups.map((group) => (
                                <div
                                    className="ovaam-drawer-group"
                                    key={group.name}
                                >

                                    <button
                                        type="button"
                                        className={`ovaam-drawer-link ovaam-submenu-toggle ${
                                            openSubmenu === group.name ? "active" : ""
                                        }`}
                                        onClick={() => toggleSubmenu(group.name)}
                                        aria-expanded={openSubmenu === group.name}
                                    >
                                        {group.name}

                                        <span
                                            className={`ovaam-submenu-arrow ${
                                                openSubmenu === group.name ? "rotated" : ""
                                            }`}
                                        >
                                            ⌄
                                        </span>
                                    </button>

                                    {openSubmenu === group.name && (
                                        <div className="ovaam-submenu">
                                            {group.links.map(([label, href]) => (
                                                <a
                                                    href={href}
                                                    key={label}
                                                    onClick={closeMenu}
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            ))}

                            <a
                                className="ovaam-drawer-link"
                                href="#templates"
                                onClick={closeMenu}
                            >
                                Templates
                            </a>

                            <a
                                className="ovaam-drawer-link"
                                href="#features"
                                onClick={closeMenu}
                            >
                                Features
                            </a>

                            <a
                                className="ovaam-drawer-link"
                                href="#pricing"
                                onClick={closeMenu}
                            >
                                Pricing
                            </a>

                        </div>

                        {/* DRAWER FOOTER */}
                        <div className="ovaam-drawer-footer">

                            <button
                                className="btn ovaam-drawer-login"
                                onClick={() => {
                                    closeMenu();
                                    onLogin();
                                }}
                            >
                                Log In
                            </button>

                            <button
                                className="btn ovaam-drawer-start"
                                onClick={() => {
                                    closeMenu();
                                    onLogin();
                                }}
                            >
                                Get Started Free
                            </button>

                        </div>

                    </aside>
                </div>
            )}

            {/* HERO SECTION */}
            <section
                className="ovaam-hero"
                aria-labelledby="ovaam-hero-title"
            >
                <div className="ovaam-hero-glow" />

                <div className="container-fluid ovaam-hero-container">

                    <div className="row align-items-center g-4">

                        {/* HERO LEFT */}
                        <div className="col-lg-6 ovaam-hero-copy">

                            <div className="ovaam-eyebrow">
                                THE ALL-IN-ONE PLATFORM
                            </div>

                            <h1 id="ovaam-hero-title">
                                Build Stunning Websites<br />
                                and Powerful <span>Online Stores</span><br />
                                with OVAAM
                            </h1>

                            <p className="ovaam-hero-description">
                                Create, customize and grow your digital presence — no coding
                                required. From business websites to full-featured eCommerce
                                stores, OVAAM gives you everything in one place.
                            </p>

                            <div className="ovaam-hero-actions">

                                <button
                                    className="btn ovaam-primary-cta"
                                    onClick={onLogin}
                                >
                                    Start for Free <span>→</span>
                                </button>

                                <a
                                    className="btn ovaam-outline-cta"
                                    href="#templates"
                                >
                                    View Templates
                                </a>

                            </div>

                            <div className="ovaam-benefits">
                                <span><b>✓</b> No Coding Required</span>
                                <span><b>✓</b> Business &amp; eCommerce</span>
                                <span><b>✓</b> Mobile Responsive</span>
                            </div>

                        </div>

                        {/* HERO RIGHT */}
                        <div
                            className="col-lg-6 ovaam-hero-visual"
                            id="website-builder"
                        >

                            <div className="ovaam-lime-swoosh" />

                            <div className="ovaam-laptop">

                                <div className="ovaam-laptop-camera" />

                                <div className="ovaam-laptop-screen">

                                    <div className="ovaam-editor-topbar">
                                        <strong><i /> OVAAM</strong>

                                        <div className="ovaam-editor-tools">
                                            <span>▣</span>
                                            <span>▢</span>
                                            <span>▢</span>
                                        </div>

                                        <button>Publish</button>
                                    </div>

                                    <div className="ovaam-editor-body">

                                        <aside className="ovaam-editor-sidebar">
                                            <span>⌂</span>
                                            <span>▧</span>
                                            <span>▤</span>
                                            <span>▣</span>
                                            <span>♙</span>
                                        </aside>

                                        <div className="ovaam-store-preview">

                                            <div className="ovaam-selection">

                                                <div className="ovaam-store-copy">
                                                    <h2>
                                                        Modern<br />Furniture
                                                    </h2>

                                                    <p>
                                                        Explore premium furniture for your space
                                                    </p>

                                                    <button>
                                                        Shop Now&nbsp; →
                                                    </button>
                                                </div>

                                                <div className="ovaam-room-art">
                                                    <div className="ovaam-plant">♣</div>
                                                    <div className="ovaam-lamp" />
                                                    <div className="ovaam-sofa">
                                                        <i /><b /><em />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="ovaam-laptop-base" />

                            </div>

                            {/* PHONE PREVIEW */}
                            <div className="ovaam-phone">

                                <div className="ovaam-phone-speaker" />

                                <div className="ovaam-phone-top">
                                    <strong>◒VAAM</strong>
                                    <span>🛒</span>
                                </div>

                                <div className="ovaam-phone-room">
                                    <div className="ovaam-phone-plant">♣</div>
                                    <div className="ovaam-phone-chair" />
                                </div>

                                <h3>
                                    Modern<br />Furniture
                                </h3>

                                <button>Shop Now&nbsp; →</button>

                                <div className="ovaam-phone-categories">
                                    <span>▰<small>Chairs</small></span>
                                    <span>▱<small>Tables</small></span>
                                    <span>▰<small>Sofas</small></span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
<ExtraSections />
<div id="ecommerce" className="ovaam-anchor" />


<EcommerceFeatures onLogin={onLogin} />
<SolutionsSection onLogin={onLogin} />
            {/* PAGE ANCHORS */}
            <div id="ecommerce" className="ovaam-anchor" />
            <div id="templates" className="ovaam-anchor" />
            <div id="features" className="ovaam-anchor" />
            <div id="solutions" className="ovaam-anchor" />
            <div id="pricing" className="ovaam-anchor" />

        </main>
    );
}
