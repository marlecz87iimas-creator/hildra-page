import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <Container className="prose-headings:font-display max-w-3xl">
        <Link
          href="/#inicio"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-foreground">
          Aviso de privacidad
        </h1>
        <p className="mt-4 text-sm text-muted">Última actualización: julio 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            En {SITE.name} respetamos tu privacidad. Este aviso describe cómo
            tratamos los datos personales que nos compartes a través del sitio web,
            formularios de contacto y canales como WhatsApp o correo electrónico.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Datos que podemos recabar
            </h2>
            <p className="mt-2">
              Nombre, empresa, correo electrónico, teléfono y el contenido del
              mensaje que nos envíes para solicitar información o cotizaciones.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Finalidad
            </h2>
            <p className="mt-2">
              Atender solicitudes de contacto, elaborar cotizaciones, dar
              seguimiento comercial y mejorar nuestros servicios.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Contacto
            </h2>
            <p className="mt-2">
              Para ejercer derechos ARCO o aclarar dudas sobre este aviso, escribe
              a{" "}
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
