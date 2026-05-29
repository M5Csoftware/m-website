"use client";
import { useState } from "react";

// ── Icon helpers ────────────────────────────────────────────────────
const OrangeCircleIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#f27a1a] text-white text-xs font-bold shrink-0">
    {children}
  </span>
);

// ── Banner ──────────────────────────────────────────────────────────
function AboutBanner() {
  return (
    <section className="relative bg-[#0b1220] overflow-hidden min-h-55 flex items-center py-12 px-6">
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url('/banner.jpg')` }}
      />
      <div className="max-w-425 w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4">
        <div>
          <h1 className="text-[36px] md:text-[44px] font-extrabold text-white leading-tight tracking-tight">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}

// ── Sidebar nav items ───────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "vision", label: "Our Vision" },
  { id: "mission", label: "Our Mission" },
  { id: "edge", label: "The Manvi Edge" },
  { id: "features", label: "Key Features" },
  { id: "performance", label: "Our Performance" },
  { id: "claim", label: "Refund & Loss Claim Policy" },
];

// ── Section card ────────────────────────────────────────────────────
function SectionCard({
  id,
  icon,
  title,
  image,
  children,
}: {
  id: string;
  icon?: string;
  title: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="bg-[#eef0f5] border border-gray-200/50 rounded-4xl p-8 lg:p-10 shadow-sm scroll-mt-24 w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
        ) : (
          <OrangeCircleIcon>{icon}</OrangeCircleIcon>
        )}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1f2e]">
          {title}
        </h2>
      </div>
      <div className="text-[14px] text-[#727C88] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// ── Individual Nav Card Component ──────────────────────────────────
function NavCard({
  item,
  isActive,
  onClick,
}: {
  item: { id: string; label: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl border transition-all duration-200 ${
        isActive
          ? "bg-white border-[#f27a1a] shadow-sm"
          : "bg-white border-transparent hover:border-gray-200 hover:shadow-sm"
      }`}
    >
      <OrangeCircleIcon>✦</OrangeCircleIcon>
      <span
        className={`text-sm font-semibold text-left ${
          isActive ? "text-[#f27a1a]" : "text-slate-700"
        }`}
      >
        {item.label}
      </span>
    </button>
  );
}

// ── Main Component ──────────────────────────────────────────────────
export default function AboutUs() {
  const [active, setActive] = useState("vision");

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#0f172a] antialiased flex flex-col">
      {/* ── Banner ── */}
      <AboutBanner />

      {/* ── Body ── */}
      <main className="flex-grow max-w-425 w-full mx-auto px-6 py-12 flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── Sidebar (5/12) ── */}
          <aside className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            {/* Who Are We card */}
            <div className="bg-[#eef0f5] border border-gray-200/50 rounded-4xl p-8 lg:p-10 shadow-sm flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#1c1f2e] leading-tight tracking-tight">
                  Who Are We?
                </h2>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                  Manvi International Courier Is A Trusted Logistics And Courier
                  Service Provider Committed To Delivering Parcels, Documents,
                  And Commercial Shipments Safely, Swiftly, And
                  Cost-Effectively. With A Strong Operational Network And
                  Experienced Professionals, We Specialise In International
                  Courier Solutions.
                </p>
              </div>

              {/* Nav Cards */}
              <div className="flex flex-col gap-2 sm:gap-3">
                {NAV_ITEMS.map((item) => (
                  <NavCard
                    key={item.id}
                    item={item}
                    isActive={active === item.id}
                    onClick={() => scrollTo(item.id)}
                  />
                ))}
              </div>
            </div>

            {/* Ready to Ship card */}
            <div className="bg-[#eef0f5] border border-gray-200/50 rounded-4xl p-8 lg:p-10 shadow-sm flex flex-col items-start gap-5">
              <h3 className="text-[28px] md:text-[34px] font-extrabold text-[#f27a1a] tracking-tight leading-tight">
                Ready To Ship?
              </h3>
              <p className="text-[13px] text-gray-500 font-semibold leading-relaxed">
                Experience The Difference Of A Courier Service That Cares. Join
                The Manvi International Family Today.
              </p>
              <button className="border-2 border-[#f27a1a] text-[#f27a1a] hover:bg-[#f27a1a] hover:text-white transition-colors duration-300 rounded-xl px-6 py-3 text-[14px] font-bold flex items-center gap-1.5 mt-2">
                Contact Us ↗
              </button>
            </div>
          </aside>

          {/* ── Main content (7/12) ── */}
          <div className="lg:col-span-7 flex flex-col gap-5 min-w-0">
            <SectionCard id="vision" title="Our Vision" image="/our-vision.png">
              <p>
                At Manvi International, We Believe That Distance Should Never Be
                A Barrier To Emotions. Based In The Heart Of Delhi, We
                Specialise In Seamless International Courier Services That
                Bridge The Gap Between India And The Rest Of The World. Whether
                It&apos;s A Festive Gift Or Critical Business Documents, We
                Deliver More Than Just Packages; We Deliver Peace Of Mind.
              </p>
            </SectionCard>

            <SectionCard
              id="mission"
              title="Our Mission"
              image="/our-mission.png"
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  To Eliminate Shipment Delays Or Losses From Our Customers
                  Minds
                </li>
                <li>To Provide Transparent Pricing And Real-Time Tracking</li>
                <li>To Build Life-Long Relationships With Our Customers</li>
              </ul>
            </SectionCard>

            <SectionCard id="edge" title="The Manvi Edge" image="/edge.png">
              <p className="mb-3">
                We Don&apos;t Just Ship, We Strategise. By Integrating
                World-Class Technology With A Deep Understanding Of Global
                Logistics, We Ensure Your Shipment Is Handled With The Highest
                Standards Of Safety And Speed.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Global Reach, Local Roots:",
                    body: "From Our Delhi Headquarters, We Reach Over 225+ Countries, Including The USA, UK, Canada, And Australia.",
                  },
                  {
                    title: "Tier-1 Partnerships:",
                    body: "We Leverage The Global Infrastructure Of Industry Leaders Like DHL, FedEx, And UPS To Offer You Premium Service At Competitive Rates.",
                  },
                  {
                    title: "Real-Time Transparency:",
                    body: "Our Advanced Tracking Systems Ensure You Know Exactly Where Your Shipment Is, From Our Doorstep To Their Destination.",
                  },
                  {
                    title: "Customer-Centric Ethics:",
                    body: "Our Operations Are Guided By A Rigorous Refund And Loss Claim Policy, Ensuring That Your Investment Is Always Protected.",
                  },
                  {
                    title: "Reliability:",
                    body: "We Do What We Say, Every Timeline We Provide Is Backed By Data And Commitment.",
                  },
                  {
                    title: "Integrity:",
                    body: "Transparent Pricing With No Hidden Costs. What You See Is What You Pay.",
                  },
                  {
                    title: "Speed:",
                    body: "In A Fast-Moving World, We Prioritise Express Routes To Ensure Your Packages Arrive Ahead Of The Deadline.",
                  },
                ].map(({ title, body }) => (
                  <div key={title}>
                    <span className="font-bold text-[#1c1f2e]">{title}</span>{" "}
                    {body}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[#727C88] text-xs">
                What Started As A Vision To Simplify International Shipping For
                The Indian Diaspora Has Grown Into A Full-Scale Logistics
                Powerhouse. Today, Manvi International Is The Preferred Partner
                For Thousands Of Families And Businesses Who Value Security As
                Much As Speed.
              </p>
            </SectionCard>

            <SectionCard id="features" title="Key Features" image="/edge.png">
              <ul className="list-disc pl-5 space-y-1">
                <li>Customs Documentation Support</li>
                <li>International Tracking At Every Stage</li>
                <li>Competitive International Rates</li>
              </ul>
            </SectionCard>

            <SectionCard
              id="performance"
              title="Our Performance"
              image="/edge.png"
            >
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>98% Successful Delivery Rate</li>
                <li>Thousands Of Shipments Completed Successfully</li>
                <li>Multiple International Destinations Served</li>
                <li>Strong Repeat Customer Base</li>
              </ul>
              <p className="text-[#727C88] text-xs">
                Our Performance Is Driven By Disciplined Operations, Trained
                Staff, And Reliable Logistics Partners.
              </p>
            </SectionCard>

            <SectionCard
              id="claim"
              image="/edge.png"
              title="Refund & Loss Claim Policy"
            >
              <p className="mb-3">
                At Manvi International, Your Investment Is Always Protected. Our
                rigorous claim policy ensures that any damage or loss is handled
                swiftly and fairly.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Claims Must Be Raised Within 7 Days Of Delivery</li>
                <li>Full Documentation Required For Processing</li>
                <li>Refunds Processed Within 10–14 Business Days</li>
                <li>Dedicated Support Team For Every Claim</li>
              </ul>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}
