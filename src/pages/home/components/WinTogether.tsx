import { useEffect, useRef, useState } from "react";

const teamStats = [
  { label: "For the dreamers who became builders", value: "Founders" },
  { label: "For the strategists who deserve to shine", value: "Marketing Teams" },
  { label: "For the partners who go above and beyond", value: "Agencies" },
  { label: "For the ones who pour their heart in", value: "Builders" },
];

const testimonials = [
  {
    quote: "BOAST IT UP completely changed how I think about my brand. I went from feeling invisible to feeling unstoppable. The health check alone was worth every penny.",
    name: "Jordan Rivera",
    title: "Founder",
    company: "Bloom Studio",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20founder%20headshot%20smiling%20confident%20creative%20studio%20entrepreneur%20clean%20warm%20white%20background%20portrait%20natural%20light&width=80&height=80&seq=boast-avatar-001&orientation=squarish",
  },
  {
    quote: "We finally have one place where everything makes sense. Our channel efficiency tripled and we didn't spend a single extra dollar on ads. Just smarter decisions.",
    name: "Marcus Webb",
    title: "Head of Marketing",
    company: "Crestline Co.",
    avatar: "https://readdy.ai/api/search-image?query=professional%20man%20marketing%20director%20headshot%20smiling%20confident%20tech%20startup%20clean%20warm%20white%20background%20portrait%20natural%20light&width=80&height=80&seq=boast-avatar-002&orientation=squarish",
  },
  {
    quote: "As an agency, we use Boast It Up for every single client. The brand health reports are something our clients actually read and act on. That's rare.",
    name: "Priya Nair",
    title: "Creative Director",
    company: "Nair & Co. Agency",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20creative%20director%20agency%20headshot%20smiling%20confident%20clean%20warm%20white%20background%20portrait%20natural%20light&width=80&height=80&seq=boast-avatar-003&orientation=squarish",
  },
];

export default function WinTogether() {
  const [visible, setVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTestimonialsVisible(true); },
      { threshold: 0.1 }
    );
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-28"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Win Together */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-16 mb-28"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{ background: "var(--eyebrow-badge-bg)", border: "1px solid var(--eyebrow-badge-border)" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--eyebrow-badge-text)" }}>Built for the ones who care the most</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
              You&apos;ve earned the right to boast.<br />Let us help you prove it.
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {teamStats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl transition-colors duration-200"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.7s ease ${0.2 + i * 0.1}s, transform 0.7s ease ${0.2 + i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-card-active)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-light)"; }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.12)" }}
                  >
                    <i className="ri-heart-fill text-orange-400 text-sm"></i>
                  </div>
                  <div>
                    <div className="text-xs leading-tight" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105"
              style={{ background: "#FF7F3E", color: "white" }}
            >
              Join the builders winning with BOAST IT UP <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="flex-1 w-full">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border-medium)" }}
            >
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20passionate%20entrepreneurs%20founders%20team%20collaboration%20modern%20bright%20office%20creative%20workspace%20people%20celebrating%20success%20brand%20building%20warm%20natural%20light%20professional&width=700&height=500&seq=boast-team-amp-001&orientation=landscape"
                alt="Builders winning with Boast It Up"
                className="w-full object-cover object-top rounded-2xl"
                style={{ height: "420px" }}
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          style={{
            opacity: testimonialsVisible ? 1 : 0,
            transform: testimonialsVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Outcomes speak louder than words</h2>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>Hear from the builders who use BOAST IT UP every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col transition-colors duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  opacity: testimonialsVisible ? 1 : 0,
                  transform: testimonialsVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${0.1 + i * 0.15}s, transform 0.7s ease ${0.1 + i * 0.15}s`,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--testimonial-border-hover)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-light)"; }}
              >
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <i key={s} className="ri-star-fill text-amber-400 text-sm"></i>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-primary)" }}>&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid var(--border-light)" }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t.title} &middot; {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}