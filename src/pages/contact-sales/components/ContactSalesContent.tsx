const valueProps = [
  {
    title: "How does social growth drive your business?",
    body: "Find out how with audience data you can trust and brand insights you need to take action and drive real, measurable growth.",
  },
  {
    title: "Amplify Your Reach Faster",
    body: "Understand what resonated, why it worked, and which actions to take next. Deeply explore engagement data across any channel, persona, or cohort.",
  },
  {
    title: "Drive Results & Revenue",
    body: "Define, measure, and optimize key brand metrics around acquisition, retention, monetization, and audience loyalty.",
  },
  {
    title: "Trust Your Data",
    body: "Best-in-class data governance, security, and compliance standards keep your brand intelligence trustworthy and secure.",
  },
];

const trustedBrands = [
  { name: "Shopify", icon: "ri-store-2-fill" },
  { name: "Amazon", icon: "ri-amazon-fill" },
  { name: "Instagram", icon: "ri-instagram-fill" },
  { name: "LinkedIn", icon: "ri-linkedin-box-fill" },
  { name: "YouTube", icon: "ri-youtube-fill" },
  { name: "Twitter / X", icon: "ri-twitter-x-fill" },
];

export default function ContactSalesContent() {
  return (
    <div className="flex flex-col gap-12">
      {/* Headline */}
      <div>
        <h1 className="font-display text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-0" style={{ color: "var(--text-primary)" }}>
          Amplify the power of<br className="hidden lg:block" /> your brand
        </h1>
      </div>

      {/* Value props */}
      <div className="flex flex-col gap-6">
        {valueProps.map((vp, i) => (
          <div key={i} className="flex gap-4">
            <div
              className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
              style={{ background: "rgba(255,127,62,0.15)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "#FF7F3E" }}></div>
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                {vp.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {vp.body}
              </p>
            </div>
          </div>
        ))}
      </div>



      {/* Looking for something else */}
      <div
        className="rounded-xl p-6"
        style={{ border: "1px solid var(--border-light)", background: "var(--bg-card)" }}
      >
        <h3 className="font-display text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Looking for something else?
        </h3>
        <a
          href="mailto:hello@boastitup.com"
          className="text-sm font-semibold underline-offset-2 hover:underline transition-colors duration-200"
          style={{ color: "#FF7F3E" }}
        >
          General company inquiries &rarr;
        </a>
      </div>
    </div>
  );
}
