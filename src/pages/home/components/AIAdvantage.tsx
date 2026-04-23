import { useEffect, useRef, useState } from "react";

const aiFeatures = [
  {
    icon: "ri-layout-masonry-fill",
    title: "Everything in One Place",
    desc: "Your data, your channels, your story — finally unified and making sense. No more juggling tools.",
    color: "from-orange-400 to-pink-500",
    img: "https://readdy.ai/api/search-image?query=unified%20brand%20dashboard%20dark%20interface%20all%20channels%20connected%20social%20media%20email%20website%20analytics%20in%20one%20place%20orange%20pink%20gradient%20modern%20SaaS%20UI%20minimal%20clean%20dark%20background%20professional&width=400&height=260&seq=unified-dash-dark-amp-001&orientation=landscape",
  },
  {
    icon: "ri-compass-3-fill",
    title: "Guidance You Can Act On",
    desc: "No overwhelming reports. Just clear, simple next steps you can execute today — without a data team.",
    color: "from-violet-500 to-pink-500",
    img: "https://readdy.ai/api/search-image?query=actionable%20guidance%20dashboard%20dark%20theme%20simple%20clear%20recommendations%20next%20steps%20brand%20strategy%20cards%20clean%20modern%20interface%20dark%20background%20warm%20tones%20minimal&width=400&height=260&seq=guidance-dash-dark-amp-001&orientation=landscape",
  },
  {
    icon: "ri-plant-fill",
    title: "Growth That Feels Natural",
    desc: "The best growth doesn't force things — it amplifies what's already working. We find those levers for you.",
    color: "from-emerald-400 to-teal-500",
    img: "https://readdy.ai/api/search-image?query=organic%20growth%20analytics%20dashboard%20dark%20theme%20upward%20trending%20charts%20brand%20momentum%20green%20teal%20gradient%20modern%20SaaS%20analytics%20interface%20dark%20background%20clean%20minimal&width=400&height=260&seq=growth-dash-dark-amp-001&orientation=landscape",
  },
  {
    icon: "ri-heart-pulse-fill",
    title: "Brand Health Check",
    desc: "A complete picture of your brand's strength, told with care and clarity. Know exactly where you stand.",
    color: "from-amber-400 to-orange-500",
    img: "https://readdy.ai/api/search-image?query=brand%20health%20score%20dashboard%20dark%20interface%20health%20metrics%20gauge%20chart%20strengths%20weaknesses%20amber%20orange%20gradient%20modern%20SaaS%20tool%20dark%20background%20clean%20minimal&width=400&height=260&seq=health-dash-dark-amp-001&orientation=landscape",
  },
];

export default function AIAdvantage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(249,115,22,0.4) 0%, rgba(168,85,247,0.3) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "var(--text-primary)" }}>
            You&apos;ve done the hard part.<br />We&apos;ll handle the rest.
          </h2>
          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We don&apos;t ask you to start over. We meet you exactly where you are and make everything you&apos;ve already built work harder for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-medium)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s, box-shadow 0.3s ease`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(249,115,22,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-card-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-medium)";
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

              </div>
              <div className="p-5">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg mb-3" style={{ background: "#FF7F3E" }}>
                  <i className={`${feature.icon} text-white text-base`}></i>
                </div>
                <h3 className="font-display font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 mt-3 font-medium transition-colors duration-200 cursor-pointer">
                  Learn more <i className="ri-arrow-right-line text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}