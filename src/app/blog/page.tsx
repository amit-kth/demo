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
        description="Guides for planning websites, online stores and focused chatbot experiences."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        sideNote={{ label: "Practical, not prescriptive", text: "Use these ideas as a starting point, then weigh your goals and constraints." }}
        image={{ src: "/ai-support-desk.jpg", alt: "A laptop and phone showing a simple support chat interface", label: "Illustrative chatbot interface", tint: "lilac" }}
      />
      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container>
          <BlogExplorer />
        </Container>
      </section>
    </main>
  );
}
