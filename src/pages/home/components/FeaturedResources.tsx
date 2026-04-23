import { useEffect, useRef, useState } from "react";

const resources = [
  {
    tag: "Report",
    title: "The Brand Builder's Benchmark: How Founders Win in 2026",
    img: "https://readdy.ai/api/search-image?query=brand%20builder%20benchmark%20report%20cover%20design%20clean%20minimal%20white%20background%20warm%20orange%20gradient%20typography%20professional%20business%20document%20founders%20entrepreneurs&width=400&height=280&seq=boast-resource-amp-001&orientation=landscape",
    link: "#",
  },
  {
    tag: "Guide",
    title: "Brand Health 101: The Complete Guide to Knowing Where You Stand",
    img: "https://readdy.ai/api/search-image?query=brand%20health%20guide%20cover%20design%20warm%20background%20gradient%20abstract%20organic%20shapes%20professional%20business%20document%20clean%20minimal&width=400&height=280&seq=boast-resource-amp-002&orientation=landscape",
    link: "#",
  },
  {
    tag: "Guide",
    title: "Channel Efficiency Playbook: Do More With What You Already Have",
    img: "https://readdy.ai/api/search-image?query=channel%20efficiency%20playbook%20cover%20design%20clean%20modern%20gradient%20orange%20pink%20professional%20business%20presentation%20document%20marketing%20strategy&width=400&height=280&seq=boast-resource-amp-003&orientation=landscape",
    link: "#",
  },
  {
    tag: "Guide",
    title: "The Natural Growth Guide: Amplify What's Already Working",
    img: "https://readdy.ai/api/search-image?query=natural%20growth%20guide%20cover%20design%20warm%20golden%20gradient%20minimal%20clean%20professional%20business%20document%20typography%20organic%20brand%20momentum&width=400&height=280&seq=boast-resource-amp-004&orientation=landscape",
    link: "#",
  },
];

export default function FeaturedResources() {
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
      id="use-cases"
      className="py-24"
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="flex items-end justify-between mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Featured Blogs&nbsp;</h2>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.link}
              className="group block rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--resource-border-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-light)"; }}
            >
              <div className="relative overflow-hidden" style={{ height: "180px" }}>
                <img
                  src={res.img}
                  alt={res.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

              </div>
              <div className="p-5">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
                  style={{ background: "rgba(249,115,22,0.12)", color: "#fb923c" }}
                >
                  {res.tag}
                </span>
                <h4
                  className="font-display text-sm font-semibold leading-snug transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  {res.title}
                </h4>
                <div
                  className="flex items-center gap-1 mt-3 text-xs transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>Read more</span>
                  <i className="ri-arrow-right-line text-xs"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}