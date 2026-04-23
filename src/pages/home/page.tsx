import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import AIAdvantage from "./components/AIAdvantage";
import ProductFeatures from "./components/ProductFeatures";
import FeaturedResources from "./components/FeaturedResources";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <AIAdvantage />
      <ProductFeatures />
      <FeaturedResources />
      <CTASection />
      <Footer />
    </main>
  );
}