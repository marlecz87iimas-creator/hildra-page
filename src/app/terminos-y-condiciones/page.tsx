import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio de ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <Container className="max-w-3xl">
        <Link
          href="/#inicio"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-foreground">
          Términos y condiciones
        </h1>
        <p className="mt-4 text-sm text-muted">Última actualización: julio 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            Al utilizar el sitio web de {SITE.name}, aceptas estos términos. El
            contenido informativo no constituye una oferta contractual definitiva
            hasta que se acuerde por escrito el alcance de un proyecto.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Servicios
            </h2>
            <p className="mt-2">
              Los precios mostrados son referenciales (“desde”). Cada proyecto se
              cotiza según necesidades, complejidad y tiempos de entrega.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Propiedad intelectual
            </h2>
            <p className="mt-2">
              Marcas, textos, diseños y software propios de {SITE.name} están
              protegidos. No está permitido copiarlos o redistribuirlos sin
              autorización.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Contacto
            </h2>
            <p className="mt-2">
              Para dudas sobre estos términos:{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
