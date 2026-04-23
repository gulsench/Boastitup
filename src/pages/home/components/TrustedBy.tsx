import { useEffect, useRef, useState } from "react";

const logos = [
  { name: "Shopify", icon: "ri-store-2-fill" },
  { name: "Amazon", icon: "ri-amazon-fill" },
  { name: "WooCommerce", icon: "ri-shopping-cart-2-fill" },
  { name: "BigCommerce", icon: "ri-shopping-bag-fill" },
  { name: "Instagram", icon: "ri-instagram-fill" },
  { name: "LinkedIn", icon: "ri-linkedin-box-fill" },
  { name: "YouTube", icon: "ri-youtube-fill" },
  { name: "Twitter/X", icon: "ri-twitter-x-fill" },
];

const stats = [
  { value: "89%", label: "Feel more connected to their audience" },
  { value: "3.2x", label: "Greater channel efficiency" },
  { value: "+47%", label: "Momentum increase" },
  { value: "10K+", label: "Brands already boasting" },
];

const tickerItems = [...logos, ...logos, ...logos];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="connections"
      className="pt-16 pb-20"
      style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border-subtle)" }}
    >
      {/* Section label */}
      <div
        className="text-center mb-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="font-display text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-ghost)" }}>
          seamless connections
        </p>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden mb-16">
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "var(--ticker-fade-left)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "var(--ticker-fade-right)" }}
        />
        <div
          className="flex items-center gap-14"
          style={{
            animation: "ticker-scroll 32s linear infinite",
            width: "max-content",
          }}
        >
          {tickerItems.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer transition-colors duration-300"
              style={{ color: "var(--ticker-color)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = "var(--ticker-color-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = "var(--ticker-color)"; }}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`${logo.icon} text-xl`}></i>
              </div>
              <span className="text-base font-bold tracking-tight whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                style={{
                  color: "#FF7F3E",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm leading-snug" style={{ color: "var(--stat-label)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}