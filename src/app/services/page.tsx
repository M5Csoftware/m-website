import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Package, Truck, Zap, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const ManviChatBot = dynamic(() => import("@/components/ManviChatBot"));
const ManviWhatsApp = dynamic(() => import("@/components/ManviWhatsApp"));

// Navigation items matching the design
const navItems = [
  { name: "DHL", icon: <Globe className="w-5 h-5 text-[#f27a1a]" />, active: true },
  { name: "UPS", icon: <ShieldCheck className="w-5 h-5 text-[#f27a1a]" />, active: false },
  { name: "Fedex", icon: <Zap className="w-5 h-5 text-[#f27a1a]" />, active: false },
  { name: "FedEx - Medicine & Special Content", icon: <Package className="w-5 h-5 text-[#f27a1a]" />, active: false },
  { name: "Aramex", icon: <Truck className="w-5 h-5 text-[#f27a1a]" />, active: false },
  { name: "DIRECT (SELF-NETWORK) SERVICES", icon: <Globe className="w-5 h-5 text-[#f27a1a]" />, active: false },
];

const serviceDetails = [
  {
    id: "dhl",
    title: "DHL",
    subtitle: "The World's #1 International Courier — Now At Your Doorstep",
    description: "Whether You're Sending A Passport-Sized Document Or A 30kg Carton, DHL's Express Network Covers Every Country On The Globe.",
    dox: [
      { label: "Destinations", value: "All Countries" },
      { label: "Weight", value: "500g - 2kg" },
      { label: "Boxes", value: "Single" },
      { label: "Delivery", value: "5-7 Working Days" }
    ],
    nondox: [
      { dest: "USA", weight: "30kg/box", duty: "Duty may apply", delivery: "5-7 working days" },
      { dest: "Canada", weight: "30kg/box", duty: "Up to CAD 20", delivery: "5-7 working days" },
      { dest: "Australia", weight: "30kg/box", duty: "Up to AUD 800", delivery: "5-7 working days" },
      { dest: "New Zealand", weight: "30kg/box", duty: "Up to AUD 800", delivery: "5-7 working days" },
      { dest: "Rest of World", weight: "30kg/box", duty: "Duty may apply", delivery: "5-7 working days" },
    ],
  },
  {
    id: "ups",
    title: "UPS",
    subtitle: "Speed And Reliability Across Every Major Market",
    description: "UPS Combines Global Reach With Robust Tracking, Making It The Smart Choice For Businesses And Individuals Shipping To North America, Australia, And Beyond.",
    dox: null,
    nondox: [
      { dest: "USA", weight: "30kg/box", duty: "Duty may apply", delivery: "7-9 working days" },
      { dest: "Canada", weight: "30kg/box", duty: "Up to CAD 20", delivery: "7-9 working days" },
      { dest: "Australia", weight: "30kg/box", duty: "Up to AUD 800", delivery: "7-9 working days" },
      { dest: "New Zealand", weight: "30kg/box", duty: "Up to AUD 800", delivery: "7-9 working days" },
      { dest: "Rest of World", weight: "30kg/box", duty: "Duty may apply", delivery: "7-9 working days" },
    ],
  },
  {
    id: "fedex",
    title: "FedEx",
    subtitle: "Precision Delivery To The World's Biggest Destinations",
    description: "FedEx's Express Network Ensures Your Shipment Moves Fast, With Full Visibility From Pickup To Delivery.",
    dox: null,
    nondox: [
      { dest: "USA", weight: "30kg/box", duty: "Duty may apply", delivery: "6-8 working days" },
      { dest: "Canada", weight: "30kg/box", duty: "Up to CAD 20", delivery: "6-8 working days" },
      { dest: "Australia", weight: "30kg/box", duty: "Up to AUD 800", delivery: "6-8 working days" },
      { dest: "New Zealand", weight: "30kg/box", duty: "Up to AUD 800", delivery: "6-8 working days" },
      { dest: "Rest of World", weight: "30kg/box", duty: "Duty may apply", delivery: "6-8 working days" },
    ],
  }
];

export const metadata = {
  title: "Services",
  description: "Explore our range of international courier and freight services including DHL, UPS, FedEx, Aramex, and our Direct Network.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans flex flex-col antialiased">
      <Header />

      <main className="flex-1 w-full max-w-425 mx-auto px-4 sm:px-6 md:px-8 py-8 pb-20">
        {/* Top Banner */}
        <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-sm flex items-center justify-end px-8 sm:px-12 md:px-20 mb-8 md:mb-12">
          <Image
            src="/hero-right.jpg"
            alt="Warehouse services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1c1f2e]/80" />
          
          <div className="relative z-10 text-right flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Services</h1>
            <p className="text-white/70 text-sm font-medium tracking-wide">Home / Services</p>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 xl:gap-12 relative items-start">
          
          {/* Left Sidebar (Sticky) */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 z-20">
            {/* Nav Card */}
            <div className="bg-[#f8f9fa] rounded-2xl shadow-md border border-gray-100/50 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[26px] md:text-[28px] font-extrabold text-[#f27a1a] leading-[1.1] tracking-tight">
                  Every Parcel. Every Country. Every Time.
                </h2>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">
                  From A Single Document To A Multi-Box Shipment, Manvi International Courier Gets It There — With The World's Best Carriers And Our Own Direct Delivery Network.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {navItems.map((item, i) => (
                  <button 
                    key={i} 
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all text-left group bg-white
                      ${item.active ? 'border border-[#f27a1a] shadow-sm' : 'border border-transparent hover:border-[#f27a1a]/30 shadow-sm'}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-[#1c1f2e] group-hover:text-[#f27a1a] transition-colors leading-snug">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#f8f9fa] rounded-2xl shadow-md border border-gray-100/50 p-6 sm:p-8 flex flex-col gap-5 text-center">
              <h3 className="text-xl md:text-2xl font-extrabold text-[#f27a1a] leading-tight tracking-tight">
                Not Sure Which Service Is Right For You?
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Tell Us Where You're Shipping, How Much It Weighs, And What's Inside — We'll Recommend The Fastest And Most Cost-Effective Option.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link href="/contact" className="flex-1 flex items-center justify-center gap-2 border border-[#f27a1a] text-[#f27a1a] font-bold text-sm py-3 px-4 rounded-xl hover:bg-[#f27a1a] hover:text-white transition-colors">
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/quote" className="flex-1 flex items-center justify-center gap-2 border border-[#f27a1a] text-[#f27a1a] font-bold text-sm py-3 px-4 rounded-xl hover:bg-[#f27a1a] hover:text-white transition-colors">
                  Get A Quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            {serviceDetails.map((service, idx) => (
              <div key={service.id} className="bg-[#f8f9fa] rounded-2xl shadow-md border border-gray-100/50 p-6 sm:p-8 md:p-10 flex flex-col">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-[#f27a1a]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1c1f2e]">{service.title}</h3>
                </div>

                <h4 className="font-bold text-[#1c1f2e] text-sm sm:text-base mb-2">{service.subtitle}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 max-w-3xl">
                  {service.description}
                </p>

                {/* DOX Section */}
                {service.dox && (
                  <div className="mb-8">
                    <h5 className="font-extrabold text-sm text-[#1c1f2e] mb-4">Document Shipping (DOX)</h5>
                    <ul className="flex flex-col gap-2">
                      {service.dox.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-500 font-medium flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 shrink-0" />
                          <strong className="text-gray-700 mr-1">{item.label}:</strong> {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Non-DOX Section */}
                {service.nondox && (
                  <div className="flex flex-col">
                    <h5 className="font-extrabold text-sm text-[#1c1f2e] mb-4">Parcel Shipping (Non-DOX)</h5>
                    
                    <div className="overflow-x-auto pb-4">
                      <table className="w-full text-left min-w-[600px] border-separate border-spacing-y-2">
                        <thead>
                          <tr>
                            <th className="font-bold text-xs text-[#1c1f2e] bg-white rounded-l-xl px-4 py-3">Destination</th>
                            <th className="font-bold text-xs text-[#1c1f2e] bg-white px-4 py-3">Max Weight</th>
                            <th className="font-bold text-xs text-[#1c1f2e] bg-white px-4 py-3">Duty-Free Limit</th>
                            <th className="font-bold text-xs text-[#1c1f2e] bg-white rounded-r-xl px-4 py-3">Delivery</th>
                          </tr>
                        </thead>
                        <tbody>
                          {service.nondox.map((row, i) => (
                            <tr key={i} className="bg-white transition-colors">
                              <td className="text-xs font-medium text-gray-600 px-4 py-3 rounded-l-xl">{row.dest}</td>
                              <td className="text-xs font-medium text-gray-600 px-4 py-3">{row.weight}</td>
                              <td className="text-xs font-medium text-gray-600 px-4 py-3">{row.duty}</td>
                              <td className="text-xs font-medium text-gray-600 px-4 py-3 rounded-r-xl">{row.delivery}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-2 text-[10px] sm:text-[11px] text-gray-400 font-medium flex flex-col gap-0.5">
                      <span>Max Box Size: 100×80×80 Cm | Single Or Multiple Pieces Accepted.</span>
                      <span>Also Available: Co-Loaders / 3, DHL For Documents And Parcels To All Countries</span>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <ManviChatBot />
      <ManviWhatsApp />
    </div>
  );
}
