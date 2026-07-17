import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

const quickLinksLeft = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Soluciones", href: "/#soluciones" },
];

const quickLinksRight = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Precios", href: "/#precios" },
];

const legalLinks = [
  { label: "Contacto", href: "/#contacto" },
  { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
];

const socialLinks = [
  { label: "Facebook", href: SITE.social.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: LinkedInIcon },
  { label: "Instagram", href: SITE.social.instagram, icon: InstagramIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071526] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white/90 uppercase">
              Enlaces rápidos
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-2">
                {quickLinksLeft.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinksRight.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white/90 uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white/90 uppercase">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-accent hover:bg-accent focus-ring"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} {SITE.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
