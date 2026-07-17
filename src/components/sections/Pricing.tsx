import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="precios">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Precios"
          title="Paquetes claros para empezar con confianza"
          description="Transparencia desde el primer contacto. Elige un punto de partida o agenda una reunión para un alcance a medida."
          align="center"
          className="mx-auto"
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((plan, index) => (
          <AnimatedSection key={plan.id} delay={index * 0.06}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border border-border bg-card p-6",
                plan.highlighted &&
                  "border-accent shadow-[var(--shadow-glow)] ring-1 ring-accent/20",
              )}
            >
              {plan.highlighted ? (
                <span className="mb-3 w-fit rounded-lg bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                  Más elegido
                </span>
              ) : (
                <span className="mb-3 h-6" aria-hidden />
              )}

              <h3 className="font-display text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight text-accent">
                {plan.price}
              </p>
              {plan.priceNote ? (
                <p className="mt-1 text-xs text-muted">{plan.priceNote}</p>
              ) : null}
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={plan.ctaHref}
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-7 w-full"
              >
                {plan.cta}
              </Button>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2} className="mt-8 text-center">
        <p className="text-sm text-muted sm:text-base">
          Cada proyecto se cotiza de acuerdo con sus necesidades.
        </p>
      </AnimatedSection>
    </Section>
  );
}
