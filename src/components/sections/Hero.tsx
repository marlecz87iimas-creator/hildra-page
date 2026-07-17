"use client";

import {
  Award,
  Boxes,
  Building2,
  Cable,
  MessageCircle,
  Monitor,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { stats } from "@/data/stats";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

const icons: Record<string, LucideIcon> = {
  Award,
  Smartphone,
  Monitor,
  Cable,
  Boxes,
  Building2,
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-atmosphere pt-24 pb-10 text-white sm:pt-28 sm:pb-14 lg:min-h-[100svh] lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-network" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            className="max-w-xl text-base text-white/75 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {SITE.tagline}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Desarrollamos software que{" "}
            <span className="text-accent">impulsa tu negocio</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Creamos aplicaciones móviles, sistemas web y soluciones tecnológicas a
            la medida para pequeñas empresas, emprendedores y negocios en
            crecimiento.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/#contacto" size="lg">
              <MessageCircle className="size-4 text-white" />
              Solicitar cotización
            </Button>
            <Button
              href={WHATSAPP_URL}
              variant="whatsapp"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Hablar por WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroIllustration className="aspect-[640/480] w-full" />
        </motion.div>
      </Container>

      <Container className="relative mt-12 sm:mt-16">
        <motion.div
          className="grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-3 lg:grid-cols-6"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => {
            const Icon = icons[stat.icon] ?? Award;
            return (
              <div key={stat.label} className="flex flex-col items-start gap-2 sm:items-center sm:text-center">
                <Icon className="size-5 text-accent sm:size-6" strokeWidth={1.75} />
                <p className="text-xs font-medium text-white/80 sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
