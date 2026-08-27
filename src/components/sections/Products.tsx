import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { ProductPreview } from "@/components/products/ProductPreview";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <Section id="productos">
      <AnimatedSection>
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Productos"
          title="Soluciones que impulsan tu negocio"
          description="Conoce las herramientas de Hildra: software listo para usar y páginas web diseñadas a tu medida."
        />
      </AnimatedSection>

      <div className="mt-14 space-y-20 sm:mt-16">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <AnimatedSection key={product.id} delay={index * 0.06}>
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                  reversed && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-border p-4 shadow-[var(--shadow-card)] sm:p-6",
                    product.gradientClass,
                  )}
                >
                  <div
                    className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm"
                    role="img"
                    aria-label={product.imageAlt}
                  >
                    <ProductPreview id={product.preview} />
                  </div>
                  {product.logo ? (
                    <div className="absolute -bottom-3 left-6 rounded-xl border border-border bg-white px-4 py-2 shadow-[var(--shadow-soft)] sm:left-8">
                      <Image
                        src={product.logo}
                        alt={`Logo ${product.name}`}
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain sm:h-9"
                      />
                    </div>
                  ) : null}
                </div>

                <div className={cn("pt-2", reversed ? "lg:pr-4" : "lg:pl-4")}>
                  <p
                    className={cn(
                      "text-xs font-semibold tracking-[0.16em] uppercase",
                      product.accentClass,
                    )}
                  >
                    {product.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground/90 sm:text-base"
                      >
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                          <Check className="size-3 text-accent" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button href={product.ctaHref} size="lg">
                      {product.cta}
                    </Button>
                    {product.demoUrl ? (
                      <Button
                        href={product.demoUrl}
                        variant="outline"
                        size="lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.demoLabel ?? "Ver demo"}
                        <ArrowUpRight className="size-4" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
