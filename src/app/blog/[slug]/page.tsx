import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import { ActionLink } from "@/components/action-link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { blogArticles } from "@/lib/blog-content";

type ArticleRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return { title: "Guide not found | Slash Logic" };
  return pageMetadata({
    title: `${article.title} | Slash Logic`,
    description: article.excerpt,
    canonical: `/blog/${article.slug}`,
    openGraphType: "article",
  });
}

export default async function ArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow={`${article.category} / Guide / ${article.readingTime}`}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }, { label: "Guide" }]}
        image={article.category === "E-commerce"
          ? { src: "/independent-retail-hero.jpg", alt: "An independent shop owner preparing an order beside a laptop", position: "right" }
          : article.category === "AI & automation"
            ? { src: "/ai-support-desk.jpg", alt: "A laptop showing a simple customer support chat interface", position: "right" }
            : { src: "/website-product-studio.jpg", alt: "A designer reviewing a website layout", position: "right" }}
        imageLayout="background"
        sideNote={{ label: "A general guide", text: "Use these ideas as a starting point, then review your project’s needs and constraints." }}
      />

      <section className="py-10 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="On this page" className="h-fit rounded-3xl border border-border bg-secondary p-5 sm:p-6 lg:sticky lg:top-28 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">In this guide</p>
            <ol className="mt-4 space-y-1">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a className="flex items-start gap-3 rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={`#section-${index + 1}`}>
                    <span className="font-display text-xs font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
            <Link className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-bold text-primary transition hover:gap-3" href="/blog">
              <ArrowLeft className="size-4" aria-hidden="true" /> All guides
            </Link>
          </nav>

          <article className="min-w-0 lg:col-span-8">
            <div className="mb-8 border-b border-border pb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Slash Logic / {article.category}</p>
              <p className="mt-2 text-sm text-muted-foreground">{article.readingTime}</p>
            </div>
            <div className="space-y-10 sm:space-y-12">
              {article.sections.map((section, index) => (
                <section className="scroll-mt-28" id={`section-${index + 1}`} key={section.heading}>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 font-display text-balance text-2xl font-semibold leading-tight sm:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => <p className="text-base leading-relaxed text-muted-foreground sm:text-lg" key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.list ? (
                    <ul className="mt-5 space-y-3 border-l-2 border-primary pl-5">
                      {section.list.map((item) => <li className="text-base leading-relaxed text-foreground" key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
            <div className="mt-12 border-t border-border pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">Have a project-specific question? A conversation can help identify what needs to be reviewed first.</p>
              <ActionLink className="mt-5" href="/contact-us">Get in touch</ActionLink>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}
