import { useState } from "react";

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France",
  "India", "Japan", "Brazil", "Mexico", "Singapore", "Netherlands", "Spain",
  "Italy", "South Korea", "Sweden", "Norway", "Denmark", "Finland", "Switzerland",
  "New Zealand", "South Africa", "Nigeria", "Kenya", "UAE", "Saudi Arabia",
  "Argentina", "Chile", "Colombia", "Indonesia", "Malaysia", "Philippines",
  "Thailand", "Vietnam", "Pakistan", "Bangladesh", "Egypt", "Turkey", "Poland",
  "Czech Republic", "Hungary", "Romania", "Portugal", "Belgium", "Austria",
  "Ireland", "Israel", "Ukraine", "Russia", "China", "Taiwan", "Hong Kong",
];

const companySizes = [
  "Just me",
  "2–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,001–5,000 employees",
  "5,000+ employees",
];

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  country: string;
  companySize: string;
  subscribe: boolean;
  privacy: boolean;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  country?: string;
  companySize?: string;
  privacy?: string;
}

export default function ContactSalesForm() {
  const [form, setForm] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    country: "",
    companySize: "",
    subscribe: false,
    privacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.email) newErrors.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.company) newErrors.company = "Company name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.country) newErrors.country = "Please select a country";
    if (!form.companySize) newErrors.companySize = "Please select company size";
    if (!form.privacy) newErrors.privacy = "You must agree to the Privacy Policy";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
    if (errors[target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const body = new URLSearchParams();
      body.append("email", form.email);
      body.append("firstName", form.firstName);
      body.append("lastName", form.lastName);
      body.append("company", form.company);
      body.append("phone", form.phone);
      body.append("country", form.country);
      body.append("companySize", form.companySize);
      body.append("subscribe", form.subscribe ? "Yes" : "No");
      const res = await fetch("https://readdy.ai/api/form/d7ku8lb9e0v02gt2ao3g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200";

  if (status === "success") {
    return (
      <div
        className="rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]"
        style={{ border: "1px solid var(--border-light)", background: "var(--bg-card)" }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
          style={{ background: "rgba(255,127,62,0.12)" }}
        >
          <i className="ri-check-line text-3xl" style={{ color: "#FF7F3E" }}></i>
        </div>
        <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          We&apos;ll be in touch soon!
        </h3>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
          Thanks for reaching out. A Boast It Up growth expert will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-8"
      style={{ border: "1px solid var(--border-light)", background: "var(--bg-card)" }}
    >
      <h4 className="font-display text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        Talk to our brand analytics expert
      </h4>
      <p className="text-sm mb-7" style={{ color: "var(--text-muted)" }}>
        Want to see a custom demo or get help finding the right plan? We&apos;d love to chat.
      </p>

      <form
        id="contact-sales-form"
        data-readdy-form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-4"
      >
        {/* Work Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email *"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
            style={{
              border: `1px solid ${errors.email ? "#ef4444" : "var(--border-medium)"}`,
              background: "var(--bg-input)",
              color: "var(--text-primary)",
            }}
          />
          {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={form.firstName}
              onChange={handleChange}
              className={inputBase}
              style={{
                border: `1px solid ${errors.firstName ? "#ef4444" : "var(--border-medium)"}`,
                background: "var(--bg-input)",
                color: "var(--text-primary)",
              }}
            />
            {errors.firstName && <p className="text-xs mt-1 text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={form.lastName}
              onChange={handleChange}
              className={inputBase}
              style={{
                border: `1px solid ${errors.lastName ? "#ef4444" : "var(--border-medium)"}`,
                background: "var(--bg-input)",
                color: "var(--text-primary)",
              }}
            />
            {errors.lastName && <p className="text-xs mt-1 text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company *"
            value={form.company}
            onChange={handleChange}
            className={inputBase}
            style={{
              border: `1px solid ${errors.company ? "#ef4444" : "var(--border-medium)"}`,
              background: "var(--bg-input)",
              color: "var(--text-primary)",
            }}
          />
          {errors.company && <p className="text-xs mt-1 text-red-500">{errors.company}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            className={inputBase}
            style={{
              border: `1px solid ${errors.phone ? "#ef4444" : "var(--border-medium)"}`,
              background: "var(--bg-input)",
              color: "var(--text-primary)",
            }}
          />
          {errors.phone && <p className="text-xs mt-1 text-red-500">{errors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className={inputBase}
            style={{
              border: `1px solid ${errors.country ? "#ef4444" : "var(--border-medium)"}`,
              background: "var(--bg-input)",
              color: form.country ? "var(--text-primary)" : "var(--text-ghost)",
            }}
          >
            <option value="">Country *</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="text-xs mt-1 text-red-500">{errors.country}</p>}
        </div>

        {/* Company Size */}
        <div>
          <select
            name="companySize"
            value={form.companySize}
            onChange={handleChange}
            className={inputBase}
            style={{
              border: `1px solid ${errors.companySize ? "#ef4444" : "var(--border-medium)"}`,
              background: "var(--bg-input)",
              color: form.companySize ? "var(--text-primary)" : "var(--text-ghost)",
            }}
          >
            <option value="">Company Size *</option>
            {companySizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.companySize && <p className="text-xs mt-1 text-red-500">{errors.companySize}</p>}
        </div>

        {/* Subscribe checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="subscribe"
            checked={form.subscribe}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded cursor-pointer accent-orange-500 flex-shrink-0"
          />
          <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            I&apos;d like to receive emails about news &amp; updates from Boast It Up.
          </span>
        </label>

        {/* Privacy checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacy"
              checked={form.privacy}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded cursor-pointer accent-orange-500 flex-shrink-0"
            />
            <span className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I consent to Boast It Up processing my personal data in accordance with our{" "}
              <a href="#" className="underline" style={{ color: "#FF7F3E" }}>Privacy Policy</a>.
            </span>
          </label>
          {errors.privacy && <p className="text-xs mt-1 text-red-500">{errors.privacy}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 rounded-lg font-semibold text-sm cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-[1.02] mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "#FF7F3E", color: "white" }}
        >
          {status === "submitting" ? "Sending..." : "Contact Sales"}
        </button>

        {status === "error" && (
          <p className="text-xs text-center text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
