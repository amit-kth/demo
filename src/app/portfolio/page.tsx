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
        title="Interface ideas, shown as concepts."
        description="Explore website, store and app concepts made to help discuss possible directions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Concept work" }]}
        sideNote={{ label: "A clear distinction", text: "These are concepts, not client projects or measured outcomes." }}
      />
      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container>
          <ProjectExplorer />
        </Container>
      </section>
    </main>
  );
}
