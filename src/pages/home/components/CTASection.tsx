import { useState, useEffect, useRef } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const body = new URLSearchParams({ email });
      await fetch("https://readdy.ai/api/form/d7krje267f6kdh31t13g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background: "var(--gradient-cta-bg)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
          style={{
            background: "var(--gradient-cta-blob)",
            filter: "blur(80px)",
          }}
        />
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
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <h2 className="font-display text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
          Ready to see where your<br />Brand Stands?
        </h2>
        <p className="text-sm sm:text-lg mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Start free. No credit card required. We meet you exactly where you are
          and make everything you&apos;ve already built work harder for you.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border" style={{ borderColor: "var(--success-border)", background: "var(--success-bg)", color: "var(--success-text)" }}>
            <i className="ri-checkbox-circle-fill text-xl" style={{ color: "var(--success-text)" }}></i>
            <span className="font-semibold">You&apos;re in! We&apos;ll be in touch soon. Time to boast.</span>
          </div>
        ) : (
          <form
            data-readdy-form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to get started"
              required
              className="flex-1 px-5 py-3.5 rounded-lg text-sm focus:outline-none transition-all duration-200"
              style={{
                background: "var(--bg-input)",
                border: "1px solid var(--border-input)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--border-input-focus)"; }}
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--border-input)"; }}
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3.5 rounded-lg font-semibold text-sm cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              style={{
                background: "#FF7F3E",
                color: "white",
              }}
            >
              {submitting ? "Sending..." : "Subscribe"}
            </button>
          </form>
        )}

        <p className="text-xs mt-5" style={{ color: "var(--text-ghost)" }}>
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}