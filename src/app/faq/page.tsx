import { pageMetadata } from "@/lib/page-metadata";
import { Container } from "@/components/container";
import { FaqBrowser } from "@/components/faq-browser";
import { PageIntro } from "@/components/page-intro";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions | Slash Logic",
  description: "Find answers about project planning, web development, digital marketing, AI chatbots and working with Slash Logic.",
  canonical: "/faq",
});

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground">
      <PageIntro
        eyebrow="FAQ / Good to know"
        title="Clear answers to common questions."
        description="Quick answers about services, planning and focused AI use cases."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        sideNote={{ label: "Still unsure?", text: "A conversation can help clarify what to explore." }}
        image={{ src: "/blue-glass-atmosphere.jpg", alt: "" }}
        imageLayout="background"
      />
      <section className="py-10 sm:py-16 lg:py-20 2xl:py-24">
        <Container>
          <FaqBrowser />
        </Container>
      </section>
    </main>
  );
}
