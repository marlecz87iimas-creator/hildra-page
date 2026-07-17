import {
  Globe,
  Layers,
  Server,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Layers,
  Server,
  Workflow,
};

export function Services() {
  return (
    <Section id="servicios">
      <AnimatedSection>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Servicios"
          title="¿Qué hacemos?"
          description="Soluciones digitales claras para hacer crecer tu negocio con calidad y cercanía."
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {services.map((service, index) => {
          const Icon = icons[service.icon] ?? Globe;

          return (
            <AnimatedSection key={service.id} delay={index * 0.05}>
              <article className="group h-full text-center lg:text-left">
                <div className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent transition group-hover:scale-105 lg:mx-0">
                  <Icon className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-foreground uppercase sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 hidden space-y-1.5 text-left sm:block">
                  {service.items.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-foreground/80"
                    >
                      <span className="size-1 rounded-full bg-accent" />
                      {item}
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
