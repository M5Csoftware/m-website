import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetQuote from "@/components/GetQuote";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0f172a] font-sans flex flex-col antialiased">
      <Header />
      <GetQuote />
      <Footer />
    </div>
  );
}