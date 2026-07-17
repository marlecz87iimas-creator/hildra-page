import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  "Soluciones a la medida",
  "Tecnologías modernas",
  "Atención personalizada",
  "Código limpio y mantenible",
  "Soporte posterior a la entrega",
];

export function About() {
  return (
    <Section id="nosotros">
      <AnimatedSection>
        <SectionHeading
          align="center"
          className="mx-auto mb-10"
          eyebrow="Nosotros"
          title="¿Por qué elegir Hildra?"
        />
      </AnimatedSection>

      <div className="grid overflow-hidden rounded-3xl border border-border lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection>
          <div className="h-full bg-[#0a192f] px-6 py-8 text-white sm:px-8 sm:py-10">
            <h3 className="font-display text-xl font-semibold">
              Lo que nos distingue
            </h3>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="size-4" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="grid gap-8 bg-section-alt px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-xs" aria-hidden>
              <svg viewBox="0 0 280 240" className="h-auto w-full">
                <circle cx="140" cy="120" r="100" fill="#eaf0ff" />
                <rect x="40" y="70" width="90" height="110" rx="16" fill="#0a192f" />
                <rect x="52" y="86" width="66" height="12" rx="6" fill="#2F6BFF" />
                <rect x="52" y="108" width="50" height="8" rx="4" fill="#ffffff55" />
                <rect x="52" y="124" width="58" height="8" rx="4" fill="#ffffff40" />
                <circle cx="85" cy="160" r="14" fill="#2F6BFF" />
                <rect x="150" y="78" width="90" height="110" rx="16" fill="#ffffff" stroke="#d7e2f0" />
                <rect x="164" y="96" width="60" height="10" rx="5" fill="#0a192f" />
                <rect x="164" y="116" width="48" height="8" rx="4" fill="#94a3b8" />
                <rect x="164" y="134" width="54" height="8" rx="4" fill="#94a3b8" />
                <rect x="164" y="158" width="40" height="18" rx="9" fill="#2F6BFF" />
                <text x="48" y="48" fill="#2F6BFF" fontSize="18" fontFamily="monospace">
                  {"</>"}
                </text>
                <circle cx="230" cy="48" r="14" fill="#2F6BFF" opacity="0.2" />
                <circle cx="230" cy="48" r="6" fill="#2F6BFF" />
              </svg>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Nuestra misión
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                En Hildra creemos que la tecnología debe ser sencilla, accesible y
                realmente útil para hacer crecer los negocios.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Nuestra misión es crear soluciones digitales que permitan a empresas
                y emprendedores ahorrar tiempo, reducir errores y enfocarse en lo
                que realmente importa.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
