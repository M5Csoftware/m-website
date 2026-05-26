import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#eef0f5] text-[#0f172a] font-sans flex flex-col antialiased">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}