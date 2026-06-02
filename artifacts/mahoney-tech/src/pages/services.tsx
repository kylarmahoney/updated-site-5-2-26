import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Hk4mSI1Q34yehBopGkPiOjENn3Rt3XSyL_kPdAd48SycFuN9aJaaMhyols9kXL1ajBORZmouT";

const servicesList = [
  {
    num: "01",
    title: "Computer & Laptop Troubleshooting",
    desc: "Slow performance, crashes, viruses, hardware failures, and general tune-ups.",
    tags: ["Hardware", "Software"],
    details: {
      overview:
        "Whether your machine is crawling, crashing, or completely unresponsive, we diagnose the root cause and get you back up and running fast. We work on Windows and macOS systems of all ages.",
      includes: [
        "Full hardware and software diagnostic",
        "Virus, malware, and spyware removal",
        "Performance optimization and startup cleanup",
        "RAM, storage, and hardware upgrades",
        "Operating system repair or reinstall",
        "Data backup and recovery assistance",
        "Blue screen of death (BSOD) diagnosis",
        "Overheating and cooling system service",
      ],
      note: "Most repairs completed same-day or next-day.",
    },
  },
  {
    num: "02",
    title: "Wi-Fi & Network Issues",
    desc: "Router setup, dead zones, slow speeds, and whole-home or office networking.",
    tags: ["Networking", "Security"],
    details: {
      overview:
        "Unreliable internet disrupts everything. We optimize your home or business network for maximum coverage, speed, and security — whether you have one router or a full mesh system.",
      includes: [
        "Router and modem setup and configuration",
        "Mesh network and Wi-Fi extender installation",
        "Dead zone elimination and signal optimization",
        "Network speed troubleshooting",
        "Wired ethernet runs and switch installation",
        "Guest network and parental control setup",
        "Firewall configuration and basic network security",
        "ISP equipment configuration",
      ],
      note: "On-site preferred for network issues to ensure full coverage testing.",
    },
  },
  {
    num: "03",
    title: "Printer Setup & Fixes",
    desc: "Wireless printing, driver installation, and frustrating connectivity issues.",
    tags: ["Hardware", "Peripherals"],
    details: {
      overview:
        "Printers are notoriously stubborn. We handle everything from fresh installations to persistent connection drops — including multi-device and wireless setups for home and small office environments.",
      includes: [
        "Wired and wireless printer setup",
        "Driver installation and updates",
        "Network print server configuration",
        "Scanning and fax setup",
        "Mobile and Bluetooth printing (AirPrint, etc.)",
        "Ink and toner issue diagnosis",
        "Multi-user office printer sharing",
        "Error code diagnosis and resolution",
      ],
      note: "Works with all major brands including HP, Canon, Epson, Brother, and Xerox.",
    },
  },
  {
    num: "04",
    title: "Software & Updates",
    desc: "Installation, system updates, driver updates, and application troubleshooting.",
    tags: ["Software", "OS"],
    details: {
      overview:
        "Outdated or broken software is a security risk and a productivity killer. We make sure your system and applications are current, clean, and running correctly.",
      includes: [
        "Windows and macOS system updates",
        "Driver identification and updates",
        "Software installation and licensing",
        "Bloatware and junk software removal",
        "Startup program optimization",
        "Compatibility troubleshooting",
        "Office suite and productivity app setup",
        "Browser cleanup and extension management",
      ],
      note: "We can handle updates remotely in most cases — no on-site visit required.",
    },
  },
  {
    num: "05",
    title: "Email & Account Help",
    desc: "Setup, recovery, and security for Gmail, Outlook, Apple Mail, and more.",
    tags: ["Cloud", "Security"],
    details: {
      overview:
        "From setting up a new email account to recovering a hacked one, we handle the full spectrum of email and online account issues — including security hardening to prevent future problems.",
      includes: [
        "New email account setup (Gmail, Outlook, Apple, Yahoo)",
        "Email client configuration on desktop and mobile",
        "Locked account recovery and 2FA setup",
        "Email migration between providers",
        "Spam filter configuration",
        "Professional email setup (e.g. yourname@yourbusiness.com)",
        "iCloud, Google, and Microsoft account management",
        "Compromised account cleanup and re-securing",
      ],
      note: "Account recovery may require identity verification with your provider.",
    },
  },
  {
    num: "06",
    title: "POS & Office Systems",
    desc: "Point-of-sale setup, maintenance, and troubleshooting for small business tech.",
    tags: ["Commercial", "Support"],
    details: {
      overview:
        "We help small businesses get their technology running smoothly — from point-of-sale systems to office networking. Keep your staff productive and your customers moving.",
      includes: [
        "POS system installation and configuration",
        "Receipt printer, cash drawer, and barcode scanner setup",
        "Credit card reader integration",
        "Office networking and switch setup",
        "Staff computer and workstation setup",
        "Shared drive and file storage configuration",
        "Business Wi-Fi and guest network setup",
        "On-call support for system issues",
      ],
      note: "We work with Square, Clover, Toast, and most major POS platforms.",
    },
  },
  {
    num: "07",
    title: "Social Media Management & Creation",
    desc: "Profile setup, content creation, branding consistency, and ongoing account optimization.",
    tags: ["Marketing", "Social Media"],
    details: {
      overview:
        "A strong social media presence builds trust and brings in customers — but it takes time you may not have. We handle everything from setting up professional profiles to creating and scheduling content that actually represents your business.",
      includes: [
        "Facebook, Instagram, Google Business setup and optimization",
        "Profile branding and bio copywriting",
        "Content creation (graphics, captions, posts)",
        "Post scheduling and consistency management",
        "Google Business profile setup and updates",
        "Review response strategy",
        "Hashtag and reach optimization",
        "Monthly performance reporting",
      ],
      note: "Packages available for one-time setup or ongoing monthly management.",
    },
  },
  {
    num: "08",
    title: "Cybersecurity",
    desc: "Malware removal, antivirus setup, password security, and basic threat assessments.",
    tags: ["Security", "Protection"],
    details: {
      overview:
        "Cyber threats are real and growing — especially for individuals and small businesses without a dedicated IT team. We protect your devices, accounts, and data from the most common and damaging attacks.",
      includes: [
        "Malware, ransomware, and spyware removal",
        "Antivirus and endpoint protection setup",
        "Password manager setup and migration",
        "Two-factor authentication (2FA) across all accounts",
        "VPN setup for secure remote access",
        "Phishing awareness and safe browsing guidance",
        "Home and business network security audit",
        "Data backup strategy and implementation",
      ],
      note: "Cybersecurity starts with awareness. We explain what we do and why at every step.",
    },
  },
];

function ServiceCard({ svc }: { svc: typeof servicesList[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-bg2 relative overflow-hidden group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-rust opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="font-mono text-[0.65rem] text-rust tracking-[0.2em] mb-4">
              {svc.num} ——
            </div>
            <h3 className="font-display text-[1.5rem] tracking-[0.03em] mb-3 leading-[1.1] text-ink">
              {svc.title}
            </h3>
            <p className="text-[0.9rem] leading-[1.7] text-steel font-light mb-5">
              {svc.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map(tag => (
                <span key={tag} className="inline-flex font-mono text-[0.6rem] tracking-[0.15em] uppercase text-rust border border-rust/30 px-2 py-1 bg-rust/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={`shrink-0 w-8 h-8 border border-rust/30 flex items-center justify-center text-rust transition-transform duration-300 mt-1 ${open ? "rotate-180" : ""}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {open && (
          <div className="mt-8 pt-8 border-t border-line" onClick={e => e.stopPropagation()}>
            <p className="text-[0.92rem] leading-[1.75] text-steel font-light mb-6">
              {svc.details.overview}
            </p>

            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-rust mb-4">
              What&apos;s Included
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {svc.details.includes.map(item => (
                <li key={item} className="flex items-start gap-2 text-[0.85rem] text-[#aaa] font-light">
                  <span className="text-rust shrink-0 mt-0.5">&rarr;</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-rust/10 border-l-2 border-rust px-4 py-3 mb-6">
              <p className="text-[0.82rem] text-steel font-light italic">{svc.details.note}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-white bg-rust px-5 py-2.5 hover:bg-rust2 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                Book This Service
              </a>
              <a
                href="/contact"
                className="inline-block font-mono text-[0.68rem] tracking-[0.12em] uppercase text-rust border border-rust/40 px-5 py-2.5 hover:bg-rust/10 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                Ask a Question
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  useSEO({
    title: "Services | Mahoney Tech Solutions | Galveston, TX",
    description: "IT support services in Galveston, TX — computer repair, Wi-Fi, cybersecurity, printer setup, POS systems, email help, and more. On-site and remote.",
    canonical: "https://mahoneytechsolutions.com/services",
  });

  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-[#070d1a] py-20 px-[5%] border-b-[3px] border-rust">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] tracking-[0.02em] mb-6 text-white">
            OUR <span className="text-rust">SERVICES</span>
          </h1>
          <p className="text-[1rem] text-[#888] font-light max-w-[500px] leading-[1.7] font-mono">
            Tap any service to learn more about what&apos;s included, common problems we solve, and how to get started.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 px-[5%] bg-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[2px] bg-line border-2 border-line">
            {servicesList.map((svc) => (
              <ServiceCard key={svc.num} svc={svc} />
            ))}

            <div className="bg-[#070d1a] p-10 flex flex-col justify-center items-start text-white">
              <h3 className="font-display text-[2rem] tracking-[0.03em] mb-3 leading-[1.1]">
                DON&apos;T SEE YOUR PROBLEM?
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-[#888] font-light mb-8 max-w-[500px]">
                These are our most common services. Reach out with your specific issue and we&apos;ll let you know if we can help.
              </p>
              <Button onClick={() => window.location.href = "/contact"}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING BAND */}
      <section className="bg-[#070d1a] py-20 px-[5%] border-t-[3px] border-rust border-b-[3px] border-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-[#888] mb-12 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Transparent Pricing
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#2a2a2a]">
            <div className="bg-[#141414] p-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#888] mb-4">Diagnostic</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">$0</div>
              <div className="font-mono text-[0.65rem] text-[#666] mb-8">Pay only if we fix it</div>

              <ul className="list-none m-0 p-0 space-y-3">
                {["Initial assessment", "Remote diagnosis", "No-fix no-fee guarantee", "Travel fee may apply for on-site"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-[#aaa] font-light pb-3 border-b border-[#1e1e1e]">
                    <span className="text-rust shrink-0">&rarr;</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rust p-10 transform scale-100 lg:scale-[1.02] shadow-2xl relative z-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/70 mb-4">Standard Service</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">Per Job</div>
              <div className="font-mono text-[0.65rem] text-white/60 mb-8">Custom quote upfront</div>

              <ul className="list-none m-0 p-0 space-y-3">
                {["All service types", "On-site or remote", "Same-day when available", "Transparent flat-rate pricing"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-white/90 font-light pb-3 border-b border-white/15">
                    <span className="text-white font-bold shrink-0">&rarr;</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4">
                <Button variant="white" className="w-full" onClick={() => window.location.href = "/contact"}>Request Quote</Button>
              </div>
            </div>

            <div className="bg-[#141414] p-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#888] mb-4">Retainer</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">Monthly</div>
              <div className="font-mono text-[0.65rem] text-[#666] mb-8">For small businesses</div>

              <ul className="list-none m-0 p-0 space-y-3">
                {["Priority response", "Regular system check-ins", "Ongoing maintenance", "Network monitoring"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-[#aaa] font-light pb-3 border-b border-[#1e1e1e]">
                    <span className="text-rust shrink-0">&rarr;</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
