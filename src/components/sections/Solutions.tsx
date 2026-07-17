import {
  Calculator,
  Check,
  Package,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const solutionMeta: Record<
  string,
  { icon: LucideIcon; iconClass: string; badgeClass?: string }
> = {
  costea: {
    icon: Calculator,
    iconClass: "bg-accent text-white",
  },
  stockea: {
    icon: Package,
    iconClass: "bg-[#0a192f] text-white dark:bg-accent",
  },
};

export function Solutions() {
  return (
    <Section id="soluciones" alt>
      <AnimatedSection>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Soluciones"
          title="Nuestras soluciones"
          description="Productos listos para empresas que quieren avanzar con herramientas claras y prácticas."
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        {solutions.map((solution, index) => {
          const meta = solutionMeta[solution.id] ?? solutionMeta.costea;
          const Icon = meta.icon;

          return (
            <AnimatedSection key={solution.id} delay={index * 0.08}>
              <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-7">
                {solution.status === "coming-soon" ? (
                  <span
                    className={cn(
                      "absolute top-5 right-5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                      meta.badgeClass ?? "bg-accent-soft text-accent",
                    )}
                  >
                    Próximamente
                  </span>
                ) : null}

                <div
                  className={cn(
                    "inline-flex size-12 items-center justify-center rounded-xl",
                    meta.iconClass,
                  )}
                >
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {solution.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
