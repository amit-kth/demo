import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ProjectExplorer } from "@/components/project-explorer";

export const metadata = pageMetadata({
  title: "Concept Work | Slash Logic",
  description: "Browse illustrative website, e-commerce and mobile app concepts from Slash Logic.",
  canonical: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="Our work / Illustrative concepts"
        title="See digital concepts in context."
        description="Explore illustrative website, store and app ideas."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Concept work" }]}
        sideNote={{ label: "A clear distinction", text: "These are concepts, not client projects or measured outcomes." }}
        image={{ src: "/blue-glass-atmosphere.jpg", alt: "" }}
        imageLayout="background"
      />
      <section className="py-10 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <ProjectExplorer />
        </Container>
      </section>
    </main>
  );
}
