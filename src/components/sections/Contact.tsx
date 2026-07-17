"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "No se pudo enviar la cotización. Intenta de nuevo.",
        );
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo enviar la cotización. Intenta de nuevo.");
    }
  }

  return (
    <Section id="contacto">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos tu proyecto"
            description="Completa el formulario y te contactamos para entender tu necesidad y enviarte una cotización clara."
          />

          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              Correo:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-accent hover:underline"
              >
                {SITE.email}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                {SITE.whatsapp.display}
              </a>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Nombre"
                name="name"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                disabled={status === "loading"}
              />
              <Input
                label="Empresa"
                name="company"
                autoComplete="organization"
                placeholder="Nombre de tu empresa"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                disabled={status === "loading"}
              />
              <Input
                label="Correo"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="correo@empresa.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                disabled={status === "loading"}
              />
              <Input
                label="Teléfono"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="10 dígitos"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                disabled={status === "loading"}
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="Mensaje"
                name="message"
                required
                placeholder="Cuéntanos qué necesitas desarrollar..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                disabled={status === "loading"}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  Enviando...
                  <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  Solicitar cotización
                  <Send className="size-4" />
                </>
              )}
            </Button>

            {status === "success" ? (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-success">
                <CheckCircle2 className="size-4" />
                Recibimos tu solicitud. Te contactaremos pronto a tu correo.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
            ) : null}

            {status === "idle" ? (
              <p className="mt-4 text-xs text-muted">
                Al enviar, tu cotización llegará a {SITE.email}.
              </p>
            ) : null}
          </form>
        </AnimatedSection>
      </div>
    </Section>
  );
}
