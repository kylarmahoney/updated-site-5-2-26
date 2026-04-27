import { Layout } from "@/components/layout/Layout";
import { Tag } from "@/components/ui/tag";
import { useSEO } from "@/hooks/use-seo";

export default function About() {
  useSEO({
    title: "About | Mahoney Tech Solutions | Galveston, TX",
    description: "Meet Kylar Mahoney — Galveston-based IT and cybersecurity specialist serving residents and small businesses with honest, reliable tech support.",
    canonical: "https://mahoneytechsolutions.com/about",
  });

  return (
    <Layout>
      {/* HEADER / BIO */}
      <section className="bg-bg2 py-20 lg:py-24 px-[5%] border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="relative overflow-hidden border-[3px] border-line shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}kylar-mahoney.png`}
              alt="Kylar Mahoney — IT & Cybersecurity Specialist"
              className="w-full object-cover object-top block"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rust p-4 sm:p-6 border-t-[3px] border-ink">
              <div className="font-display text-[1.4rem] sm:text-[1.6rem] text-white tracking-[0.04em] leading-none">
                KYLAR MAHONEY
              </div>
              <div className="font-mono text-[0.55rem] sm:text-[0.65rem] tracking-[0.15em] uppercase text-white/70 mt-1">
                IT &amp; Cybersecurity Specialist
              </div>
            </div>
          </div>

          <div>
            <Tag variant="rust" className="mb-6">About Mahoney Tech</Tag>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] mb-6 text-ink">
              LOCAL. <span className="text-rust">RELIABLE.</span> HONEST.
            </h1>

            <div className="space-y-5 text-[1rem] leading-[1.8] text-steel font-light">
              <p>
                Mahoney Tech Solutions is built on a simple idea: <strong className="text-ink font-semibold">everyone deserves straightforward, honest tech support without the runaround.</strong> Based in Galveston, TX, we serve real people &mdash; homeowners, small businesses, and everyone in between.
              </p>
              <p>
                Kylar Mahoney brings hands-on experience across hardware, networking, and cybersecurity &mdash; with a focus on actually solving problems instead of just talking about them.
              </p>
              <p>
                No corporate nonsense. No tech jargon. Just real help from a real person who shows up and gets the job done.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-[5%] bg-bg border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-steel mb-12 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Core Values
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-line border-2 border-line">
            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">01</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Honesty</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                We tell you exactly what&apos;s wrong and what it&apos;ll cost upfront. If we can&apos;t fix it, you don&apos;t pay.
              </p>
            </div>

            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">02</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Speed</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                We know downtime is expensive and frustrating. We respond fast and aim to fix issues the same day.
              </p>
            </div>

            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">03</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Clarity</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                No confusing tech jargon. We explain what happened and what we did in plain language you can actually understand.
              </p>
            </div>

            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">04</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Reliability</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                When we say we&apos;ll be there, we show up. When we take a job, we see it through to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-20 px-[5%] bg-bg2">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-steel mb-8 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Service Area
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-ink tracking-[0.03em] leading-none mb-6">
            WHERE WE OPERATE
          </h2>
          <p className="text-[1rem] leading-[1.8] text-steel font-light max-w-[600px] mb-10">
            Based in Galveston, TX, we provide on-site service throughout Galveston Island and surrounding areas. Remote support is available anywhere in the US.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-line border-2 border-line">
            {["Galveston", "Texas City", "League City", "Clear Lake", "Dickinson", "La Marque", "Friendswood", "Houston", "Anywhere (Remote)"].map(area => (
              <div key={area} className="bg-bg p-5">
                <div className="font-mono text-[0.6rem] text-rust tracking-[0.15em] mb-1">——</div>
                <div className="font-sans font-semibold text-[0.85rem] text-ink">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
