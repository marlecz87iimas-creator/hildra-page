import {
  Brain,
  Heart,
  Leaf,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandValues } from "@/data/brandValues";

const icons: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  Brain,
  Leaf,
  Users,
};

export function BrandValues() {
  return (
    <Section id="valores" alt>
      <AnimatedSection>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Nuestra esencia"
          title="Tecnología más humana"
          description="Creemos en software sencillo, cercano y con propósito — como nuestra identidad lo refleja."
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {brandValues.map((value, index) => {
          const Icon = icons[value.icon] ?? Heart;

          return (
            <AnimatedSection key={value.id} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)] sm:p-6">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-foreground uppercase">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
