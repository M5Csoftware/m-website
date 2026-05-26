"use client";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#0b1220] text-zinc-400 text-[11px] font-medium py-2 px-6 border-b border-white/4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-[#f27a1a]" />
              +91 99000 99000
            </span>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-[#f27a1a]" />
              info@manvi-express.com
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Partner Signup
            </a>
            <span className="text-zinc-700">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Partner Login
            </a>
            <span className="text-zinc-700">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Tracking
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-[#0b1220] border-b border-white/6 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "70.69297790527344px",
                height: "36.00497055053711px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
              className="object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="text-sm font-extrabold text-white tracking-tight">
                Manvi
              </span>
              <span className="text-[10px] text-[#FFFFFF] font-bold uppercase tracking-wider mt-0.5">
                International Courier
              </span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-white uppercase tracking-wider">
            {/* About Us — dropdown style, links to /about */}
            <div className="relative group">
              <Link
                href="/about"
                className={`flex items-center gap-1 transition-colors ${
                  pathname?.startsWith("/about")
                    ? "text-[#f27a1a]"
                    : "hover:text-[#f27a1a]"
                }`}
              >
                About Us
                <ChevronDown className="h-3 w-3 opacity-60" />
              </Link>
            </div>

            {/* Services */}
            <div className="relative group">
              <Link
                href="/#services"
                className="flex items-center gap-1 hover:text-[#f27a1a] transition-colors"
              >
                Services
                <ChevronDown className="h-3 w-3 opacity-60" />
              </Link>
            </div>

            {/* Support */}
            <div className="relative group">
              <Link
                href="/#contact"
                className="flex items-center gap-1 hover:text-[#f27a1a] transition-colors"
              >
                Support
                <ChevronDown className="h-3 w-3 opacity-60" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
