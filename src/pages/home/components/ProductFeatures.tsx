import { useState, useEffect, useRef } from "react";

const sections = [
  {
    eyebrow: "Brand Health Check",
    headline: "Think of it as a health check for the brand you love.",
    desc: "You'd never ignore a warning sign about your own health. Don't ignore one about your brand either.",
    features: [
      {
        icon: "ri-shield-star-fill",
        title: "Honest Assessment",
        desc: "A complete picture of your brand's strength, told with care and clarity. No sugarcoating, no overwhelm.",
        link: "Check your brand's health",
      },
      {
        icon: "ri-trophy-fill",
        title: "What's Working",
        desc: "Celebrate the wins you might not even know you're having. We surface the momentum you've already built.",
        link: "See your wins",
      },
      {
        icon: "ri-heart-fill",
        title: "What Needs Love",
        desc: "Gentle, clear guidance on where to focus your energy next. No jargon, just honest direction.",
        link: "Get your roadmap",
      },
    ],
    img: "https://readdy.ai/api/search-image?query=brand%20health%20check%20dashboard%20dark%20theme%20score%20gauge%20chart%20strengths%20weaknesses%20assessment%20report%20clean%20modern%20SaaS%20interface%20dark%20background%20orange%20pink%20accent%20colors%20professional%20minimal&width=700&height=500&seq=brand-health-dark-amp-002&orientation=landscape",
    imgRight: true,
  },
  {
    eyebrow: "Small Tweaks. Big Results.",
    headline: "You don't need a rebrand. You just need to know where to look.",
    desc: "You don't need a bigger budget either. The biggest wins are hiding in plain sight — and we'll show you exactly where.",
    features: [
      {
        icon: "ri-user-heart-fill",
        title: "Audience Connection",
        desc: "89% of our users feel more connected to their audience within the first 30 days. Real relationships, not just reach.",
        link: "See how it works",
      },
      {
        icon: "ri-signal-wifi-fill",
        title: "Channel Efficiency",
        desc: "3.2x greater channel efficiency on average. Stop spreading thin and start doubling down on what converts.",
        link: "Optimize your channels",
      },
      {
        icon: "ri-rocket-2-fill",
        title: "Momentum Increase",
        desc: "+47% momentum increase across the board. Because the best growth amplifies what's already working.",
        link: "Boost your momentum",
      },
    ],
    img: "https://readdy.ai/api/search-image?query=brand%20momentum%20analytics%20dashboard%20dark%20theme%20channel%20efficiency%20metrics%20upward%20trending%20graphs%20audience%20connection%20score%20clean%20modern%20SaaS%20interface%20dark%20background%20warm%20orange%20accent%20minimal&width=700&height=500&seq=momentum-dark-amp-002&orientation=landscape",
    imgRight: false,
  },
];

function FeatureSection({ section }: { section: typeof sections[0] }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${section.imgRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {/* Text side */}
      <div className="flex-1 w-full">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
          {section.headline}
        </h2>
        <p className="text-sm sm:text-base mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{section.desc}</p>

        <div className="space-y-3">
          {section.features.map((feat, fIdx) => (
            <div
              key={fIdx}
              className="p-5 rounded-xl cursor-pointer transition-all duration-200"
              style={{
                background: activeFeature === fIdx ? "var(--feature-active-bg)" : "var(--feature-inactive-bg)",
                border: activeFeature === fIdx ? "1px solid var(--border-card-active)" : "1px solid var(--border-light)",
              }}
              onClick={() => setActiveFeature(fIdx)}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 transition-colors duration-200"
                  style={{ background: activeFeature === fIdx ? "var(--feature-icon-active)" : "var(--feature-icon-inactive)" }}
                >
                  <i className={`${feat.icon} text-sm ${activeFeature === fIdx ? "text-white" : ""}`} style={{ color: activeFeature === fIdx ? "white" : "var(--text-dim)" }}></i>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{feat.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feat.desc}</p>
                  {activeFeature === fIdx && (
                    <a href="#" className="inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 mt-2 font-medium cursor-pointer">
                      {feat.link} <i className="ri-arrow-right-line text-xs"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image side */}
      <div className="flex-1 w-full">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border-medium)", background: "var(--bg-card)" }}
        >
          <img
            src={section.img}
            alt={section.headline}
            className="w-full object-cover object-top"
            style={{ height: "420px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductFeatures() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="brand-health" className="py-28" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className="text-center mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Track your Brand's Health Score
          </h2>
        </div>

        <div className="space-y-28">
          {sections.map((section, sIdx) => (
            <FeatureSection key={sIdx} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}