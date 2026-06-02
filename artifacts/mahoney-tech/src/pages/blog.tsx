import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { blogPosts, formatPostDate } from "@/data/blog-posts";

export default function Blog() {
  useSEO({
    title: "Blog | Mahoney Tech Solutions | Galveston, TX",
    description: "Cybersecurity tips, IT advice, and tech news for Galveston small businesses from Mahoney Tech Solutions.",
    canonical: "https://mahoneytechsolutions.com/blog",
  });

  return (
    <Layout>
      <section className="bg-[#070d1a] py-20 px-[5%] border-b-[3px] border-rust">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-steel mb-6 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Mahoney Tech Solutions
          </div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] tracking-[0.02em] mb-6 text-white">
            TECH <span className="text-rust">INTEL</span>
          </h1>
          <p className="text-[1rem] text-steel font-light max-w-[520px] leading-[1.7] font-mono">
            Cybersecurity tips, IT advice, and local tech news for Galveston businesses. No jargon. Just results.
          </p>
        </div>
      </section>

      <section className="py-20 px-[5%] bg-bg">
        <div className="max-w-[1200px] mx-auto">
          {blogPosts.length === 0 ? (
            <p className="text-steel font-mono text-sm">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-line border-2 border-line">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group bg-bg2 hover:bg-[#111c2e] transition-colors duration-200">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1a] via-[#070d1a]/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-rust border border-rust/40 px-2 py-1 bg-[#070d1a]/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel mb-3">
                      {formatPostDate(post.date)}
                    </div>
                    <h2 className="font-display text-[1.5rem] leading-[1.1] tracking-[0.02em] text-white mb-3 group-hover:text-rust transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-[0.88rem] text-steel font-light leading-[1.7] mb-5">
                      {post.excerpt}
                    </p>
                    <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-rust inline-flex items-center gap-2">
                      Read More <span className="text-base leading-none">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#070d1a] py-16 px-[5%] border-t-[3px] border-rust">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-[2rem] tracking-[0.03em] text-white mb-2">
              GOT A TECH PROBLEM?
            </h3>
            <p className="text-steel font-light text-[0.9rem]">We fix it. Same day when available.</p>
          </div>
          <a
            href="/contact"
            className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white bg-rust px-8 py-4 hover:bg-rust2 transition-colors shrink-0"
          >
            Contact Us →
          </a>
        </div>
      </section>
    </Layout>
  );
}
