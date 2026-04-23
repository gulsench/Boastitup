
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["How It Works", "Brand Health", "Connections", "Pricing"],
  Company: ["About", "Blog"],
  Resources: ["Documentation", "Support", "Community"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const contactSalesLink = { label: "Contact Sales", to: "/contact-sales" };

const socialLinks = [
  { icon: "ri-twitter-x-fill", href: "#" },
  { icon: "ri-linkedin-fill", href: "#" },
  { icon: "ri-instagram-fill", href: "#" },
];

export default function Footer() {

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-footer)" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Brand */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex items-center mb-4">
              <img
                src="https://storage.readdy-site.link/project_files/da28d26e-d7ed-402e-ba6a-1f8b5a132697/1e52844a-4d82-405b-90e1-bbfd0e8c4d1e_Logo-Main-1.png?v=6719fdb3de763ed74bf17e059b1fcfc3"
                alt="Boast It Up"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              We architect our platform around your existing infrastructure enhancing what you&apos;ve built without disrupting it.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer"
                  style={{ background: "var(--bg-social)", color: "var(--text-dim)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-social-hover)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-social)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dim)";
                  }}
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="font-display font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>{category}</h5>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-200 cursor-pointer"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-faint)"; }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: "1px solid var(--divider-color)" }}></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-ghost)" }}>
            &copy; 2026 Boast It Up, Inc. All rights reserved.
          </p>
          <a
            href="mailto:contact@boastitup.com"
            className="text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FF7F3E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"; }}
          >
            contact@boastitup.com
          </a>
        </div>


      </div>
    </footer>
  );
}