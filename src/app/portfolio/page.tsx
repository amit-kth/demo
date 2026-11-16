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
        title="Ideas shown as interfaces—not claimed as client results."
        description="Explore a small set of conceptual website, store and app screens created to make possible directions easier to discuss."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Concept work" }]}
        sideNote={{ label: "A clear distinction", text: "These concepts are not completed customer projects, client endorsements or measured outcomes." }}
      />
      <section className="py-14 sm:py-18 lg:py-24 2xl:py-32">
        <Container>
          <ProjectExplorer />
        </Container>
      </section>
    </main>
  );
}
