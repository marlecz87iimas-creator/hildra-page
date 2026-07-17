import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section id="faq" alt>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            description="Respuestas claras para que tomes decisiones con confianza antes de empezar tu proyecto."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <Accordion items={faqs} />
        </AnimatedSection>
      </div>
    </Section>
  );
}
