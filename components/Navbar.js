"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Theme check
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const isAdminPage = pathname?.startsWith('/admin') || pathname === '/login';
  if (isAdminPage) return null;

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Executive Committee", path: "/team/excom" },
        { name: "Achievements", path: "/achievements" },
        { name: "Gallery", path: "/gallery" },
        { name: "Blogs", path: "/blogs" },
      ]
    },
    {
      name: "Community",
      path: "/community",
      dropdown: [
        { name: "Community Hub", path: "/community" },
        { name: "Join IEEE CIS", path: "/membership" },
        { name: "Student Chapters", path: "/chapters" },
        { name: "Volunteer With Us", path: "/community#volunteer" },
        { name: "Sponsorship", path: "/community#sponsorship" },
      ]
    },
    {
      name: "Events",
      path: "/events",
      dropdown: [
        { name: "Upcoming Events", path: "/events" },
        { name: "Previous Events", path: "/events?type=previous" },
      ]
    },
    { name: "Application For T-CSP", path: "/application" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          <img src="/IEEE BDC 02.png" alt="IEEE CIS Logo" width="220" height="auto" style={{ maxHeight: '60px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="nav-item-wrapper"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.path}
                className={`nav-link ${pathname === item.path ? "active" : ""}`}
              >
                {item.name} {item.dropdown && <span className="arrow">▼</span>}
              </Link>

              {item.dropdown && (
                <div className="dropdown-menu">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.path} className="dropdown-link">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
            {isDark ? "☀️" : "🌙"}
          </button>

          <Link href="/contact" className="btn btn-primary nav-btn">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link href={item.path} className="mobile-nav-link">
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="mobile-dropdown">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.name} href={sub.path} className="mobile-sub-link">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} className="theme-toggle" style={{ flex: 1, padding: '1rem', background: 'var(--card-bg-alt)', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
            <Link href="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
