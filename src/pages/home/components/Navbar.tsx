import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "How It Works", hash: "how-it-works" },
  { label: "Brand Health", hash: "brand-health" },
  { label: "Connections", hash: "connections" },
  { label: "Blogs", hash: "use-cases" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    closeMobile();
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${hash}`);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || mobileOpen ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
          borderBottom: scrolled || mobileOpen ? "var(--nav-border-scrolled)" : "var(--nav-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer z-10 relative">
            <img
              src="https://storage.readdy-site.link/project_files/da28d26e-d7ed-402e-ba6a-1f8b5a132697/1e52844a-4d82-405b-90e1-bbfd0e8c4d1e_Logo-Main-1.png?v=6719fdb3de763ed74bf17e059b1fcfc3"
              alt="Boast It Up"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`/#${item.hash}`}
                onClick={(e) => handleNavClick(e, item.hash)}
                className="px-4 py-2 rounded-md text-sm font-medium cursor-pointer whitespace-nowrap transition-colors duration-200"
                style={{ color: "var(--text-label)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-label)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200"
              style={{ background: "var(--bg-social)", color: "var(--text-dim)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-social-hover)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-social)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-dim)";
              }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={`ri-${theme === "dark" ? "sun" : "moon"}-line text-sm`}></i>
            </button>
            <Link
              to="/signup"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-105"
              style={{ background: "#FF7F3E", color: "white" }}
            >
              Get started
            </Link>
            <Link
              to="/contact-sales"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
              style={{ border: "1px solid var(--border-medium)", color: "var(--text-dim)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-card)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dim)";
              }}
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1 z-10 relative">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200"
              style={{ color: "var(--text-label)" }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={`ri-${theme === "dark" ? "sun" : "moon"}-line text-lg`}></i>
            </button>

            {/* Animated hamburger button */}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-200 relative"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {/* Three bars that animate into X */}
              <span className="flex flex-col gap-[5px] w-5">
                <span
                  className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    background: "var(--text-primary)",
                    transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block h-[2px] rounded-full transition-all duration-300"
                  style={{
                    background: "var(--text-primary)",
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                <span
                  className="block h-[2px] rounded-full transition-all duration-300 origin-center"
                  style={{
                    background: "var(--text-primary)",
                    transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.4)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          backdropFilter: mobileOpen ? "blur(4px)" : "none",
        }}
        onClick={closeMobile}
      />

      {/* Mobile Menu Drawer */}
      <div
        className="fixed top-16 left-0 right-0 z-40 md:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "100vh" : "0px",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="px-5 pt-4 pb-8"
          style={{
            background: "var(--nav-bg-scrolled)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-light)",
          }}
        >
          {/* Nav links with staggered animation */}
          <nav className="mb-6">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={`/#${item.hash}`}
                onClick={(e) => handleNavClick(e, item.hash)}
                className="flex items-center justify-between py-3.5 cursor-pointer transition-all duration-200 group"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.35s ease ${0.05 + i * 0.06}s, transform 0.35s ease ${0.05 + i * 0.06}s, color 0.2s ease`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FF7F3E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                }}
              >
                <span className="font-display font-semibold text-base">{item.label}</span>
                <i
                  className="ri-arrow-right-line text-sm transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--text-ghost)" }}
                ></i>
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div
            className="flex flex-col gap-3"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.35s ease 0.28s, transform 0.35s ease 0.28s`,
            }}
          >
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3.5 rounded-xl cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "#FF7F3E", color: "white" }}
            >
              Get Started <i className="ri-arrow-right-line text-xs"></i>
            </Link>
            <Link
              to="/contact-sales"
              className="flex items-center justify-center text-sm font-semibold px-4 py-3.5 rounded-xl cursor-pointer whitespace-nowrap transition-all duration-200"
              style={{ border: "1px solid var(--border-medium)", color: "var(--text-primary)" }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nav-item-in {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
