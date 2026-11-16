import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { BlogExplorer } from "@/components/blog-explorer";

export const metadata = pageMetadata({
  title: "Insights & Guides | Slash Logic",
  description: "Practical guides for planning websites, e-commerce projects and focused AI chatbot experiences.",
  canonical: "/blog",
});

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Insights / Notes for the next decision"
        title="Useful thinking for digital work."
        description="Guides to help plan a website, shape an online store or decide where a chatbot might—and might not—help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        sideNote={{ label: "Practical, not prescriptive", text: "These guides are starting points. The right approach depends on your goals, users, systems and constraints." }}
      />
      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container>
          <BlogExplorer />
        </Container>
      </section>
    </main>
  );
}
