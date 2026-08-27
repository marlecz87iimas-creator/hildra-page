"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const taglineParts = SITE.tagline.split("más humana");

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-atmosphere pt-24 pb-12 text-white sm:pt-28 sm:pb-16 lg:min-h-[92svh] lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-network" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.p
            className="max-w-xl text-base text-white/80 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Tecnología{" "}
            <span className="font-semibold text-accent">más humana</span>
            {taglineParts[1] ?? " para simplificar la vida y los negocios."}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Software y páginas web que{" "}
            <span className="text-accent">impulsan tu negocio</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {SITE.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="/#productos" size="lg">
              Ver productos
            </Button>
            <Button
              href={WHATSAPP_URL}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white/30 text-white hover:border-accent hover:bg-accent/10 hover:text-white"
            >
              <MessageCircle className="size-4" />
              Hablar por WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <Image
              src="/brand/hildra-logo-transparent.png"
              alt="Hildra — tecnología más humana"
              width={480}
              height={200}
              className="mx-auto h-auto w-full max-w-sm"
              priority
            />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Costea", color: "bg-coral" },
                { label: "Stockea", color: "bg-purple" },
                { label: "Web", color: "bg-yellow" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-2 py-3"
                >
                  <span
                    className={`mx-auto mb-2 block size-2 rounded-full ${item.color}`}
                  />
                  <span className="text-xs font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
