import { useEffect } from "react";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";
import ContactSalesForm from "./components/ContactSalesForm";
import ContactSalesContent from "./components/ContactSalesContent";

export default function ContactSales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile headline (shown above form on small screens) */}
          <h1
            className="lg:hidden font-display text-3xl font-bold leading-tight tracking-tight mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Amplify the power of your brand
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
            {/* Left — Form */}
            <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0">
              <ContactSalesForm />
            </div>

            {/* Right — Content */}
            <div className="flex-1 min-w-0">
              <ContactSalesContent />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
