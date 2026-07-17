import { Mail, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="bg-[#0a192f] text-white">
      <Container className="py-10 sm:py-12">
        <AnimatedSection>
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] transition hover:brightness-110 sm:size-20 lg:mx-0"
            >
              <MessageCircle className="size-9 sm:size-10" fill="currentColor" />
            </a>

            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                ¿Tienes una idea o necesitas digitalizar tu negocio?
              </h2>
              <p className="mt-2 text-lg font-semibold text-accent sm:text-xl">
                Hablemos y hagámoslo realidad.
              </p>
            </div>

            <div className="mx-auto space-y-3 text-sm sm:text-base lg:mx-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <MessageCircle className="size-4 text-accent" />
                {SITE.whatsapp.display}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-white/85 transition hover:text-white"
              >
                <Mail className="size-4 text-accent" />
                {SITE.email}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
