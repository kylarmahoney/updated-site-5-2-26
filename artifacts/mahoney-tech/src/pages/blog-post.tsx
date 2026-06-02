import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/use-seo";
import { getPostBySlug, formatPostDate } from "@/data/blog-posts";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? "");

  useSEO(
    post
      ? {
          title: `${post.title} | Mahoney Tech Solutions`,
          description: post.excerpt,
          canonical: `https://mahoneytechsolutions.com/blog/${post.slug}`,
        }
      : {
          title: "Post Not Found | Mahoney Tech Solutions",
          description: "",
        }
  );

  if (!post) return <NotFound />;

  return (
    <Layout>
      <section className="bg-[#070d1a] py-16 px-[5%] border-b-[3px] border-rust">
        <div className="max-w-[800px] mx-auto">
          <Link href="/blog" className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-steel hover:text-rust transition-colors inline-flex items-center gap-2 mb-8">
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-rust border border-rust/40 px-2 py-1 bg-rust/5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] text-white mb-5">
            {post.title}
          </h1>
          <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-steel">
            {formatPostDate(post.date)}
          </div>
        </div>
      </section>

      <div className="relative w-full max-h-[480px] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full object-cover max-h-[480px] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/20 via-transparent to-[#070d1a]" />
      </div>

      <section className="py-16 px-[5%] bg-bg">
        <div className="max-w-[800px] mx-auto">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:tracking-[0.03em] prose-headings:text-white
              prose-h3:text-[1.4rem] prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-steel prose-p:font-light prose-p:leading-[1.8] prose-p:text-[0.95rem]
              prose-a:text-rust prose-a:no-underline hover:prose-a:text-rust2
              prose-strong:text-ink prose-strong:font-semibold
              prose-li:text-steel prose-li:font-light prose-li:text-[0.92rem]
              prose-ul:my-4
              prose-blockquote:border-l-rust prose-blockquote:border-l-2 prose-blockquote:bg-rust/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-steel
              prose-hr:border-line prose-hr:my-10
              prose-code:text-rust prose-code:text-[0.85em] prose-code:font-mono prose-code:bg-rust/10 prose-code:px-1 prose-code:py-0.5
              prose-img:w-full prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <section className="bg-[#070d1a] py-16 px-[5%] border-t-[3px] border-rust">
        <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-[2rem] tracking-[0.03em] text-white mb-2">
              GOT A TECH PROBLEM?
            </h3>
            <p className="text-steel font-light text-[0.9rem]">We fix it. Same day when available.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-white bg-rust px-7 py-4 hover:bg-rust2 transition-colors"
            >
              Contact Us →
            </a>
            <Link
              href="/blog"
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-rust border border-rust/40 px-7 py-4 hover:bg-rust/10 transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
