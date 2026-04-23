import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const rotatingWords = ["founders", "marketing teams", "agencies", "builders", "dreamers"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(236,72,153,0.2) 40%, transparent 70%)",
            filter: "blur(80px)",
            animation: "blob1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
            filter: "blur(80px)",
            animation: "blob2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(249,115,22,0.2) 50%, transparent 70%)",
            filter: "blur(60px)",
            animation: "blob3 18s ease-in-out infinite",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            opacity: "var(--grid-opacity)",
            backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Headline */}
        <h1
          className="font-display text-[44px] sm:text-5xl md:text-7xl font-bold leading-[1.12] tracking-tight mb-4"
          style={{
            color: "var(--text-primary)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          Clarity is the new<br />competitive advantage
        </h1>

        {/* Rotating word */}
        <div
          className="flex items-center justify-center mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
        >
          <span
            className="font-display text-[18px] sm:text-3xl md:text-5xl font-bold tracking-tight inline-block px-2"
            style={{
              color: "#FF7F3E",
              opacity: fade ? 1 : 0,
              transition: "opacity 0.3s ease",
              lineHeight: 1.6,
              paddingBottom: "0.2em",
            }}
          >
            Built for {rotatingWords[wordIndex]}.
          </span>
        </div>

        {/* Subheading */}
        <p
          className="text-[16px] md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "var(--text-muted)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}
        >
          We architect our platform around your existing infrastructure enhancing what you&apos;ve built without disrupting it.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-row items-center justify-center gap-3 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
          }}
        >
          <Link
            to="/signup"
            className="px-7 py-3.5 rounded-lg font-semibold text-sm cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105"
            style={{
              background: "#FF7F3E",
              color: "white",
            }}
          >
            Get Started
          </Link>
          <a
            href="#"
            className="px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            style={{
              border: "1px solid var(--cta-btn-border)",
              color: "var(--cta-btn-text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--cta-btn-hover-bg)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cta-btn-hover-border)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--cta-btn-border)";
            }}
          >
            Request a demo
          </a>
        </div>

        {/* Dashboard Screenshot */}
        <div
          className="relative mx-auto max-w-5xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) perspective(1000px) rotateX(0deg)" : "translateY(50px) perspective(1000px) rotateX(4deg)",
            transition: "opacity 1.2s ease 0.6s, transform 1.2s ease 0.6s",
          }}
        >
          {/* Glow behind dashboard */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(249,115,22,0.25) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)",
              filter: "blur(30px)",
              transform: "translateY(20px) scaleX(0.9)",
            }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--dashboard-bg)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border-strong)", background: "var(--dashboard-chrome-bg)" }}>
              <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
              <div className="flex-1 mx-4 h-6 rounded-md flex items-center px-3" style={{ border: "1px solid var(--border-strong)", background: "var(--bg-card)" }}>
                <span className="text-xs" style={{ color: "var(--dashboard-url-color)" }}>app.boastituup.com</span>
              </div>
            </div>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20dark%20analytics%20dashboard%20interface%20with%20colorful%20charts%20graphs%20user%20behavior%20funnels%20retention%20curves%20product%20metrics%20data%20visualization%20professional%20SaaS%20software%20UI%20dark%20theme%20orange%20pink%20purple%20accent%20colors%20clean%20minimal%20design&width=1200&height=680&seq=hero-dashboard-dark-amp-001&orientation=landscape"
              alt="Boast It Up Brand Intelligence Dashboard"
              className="w-full object-cover object-top"
              style={{ height: "480px" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
      />

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.05); }
          66% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, 40px) scale(0.9); }
          66% { transform: translate(-40px, -10px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}