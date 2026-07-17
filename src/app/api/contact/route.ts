import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Solicitud inválida." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Completa nombre, correo, teléfono y mensaje." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "El correo no es válido." },
      { status: 400 },
    );
  }

  const subject = `Cotización web — ${name}${company ? ` (${company})` : ""}`;
  const text = [
    "Nueva solicitud de cotización desde el sitio web de Hildra.",
    "",
    `Nombre: ${name}`,
    `Empresa: ${company || "—"}`,
    `Correo: ${email}`,
    `Teléfono: ${phone}`,
    "",
    "Mensaje:",
    message,
  ].join("\n");

  try {
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const from =
        process.env.RESEND_FROM_EMAIL ?? "Hildra Web <onboarding@resend.dev>";

      const result = await resend.emails.send({
        from,
        to: SITE.email,
        replyTo: email,
        subject,
        text,
      });

      if (result.error) {
        console.error("Resend error:", result.error);
        return NextResponse.json(
          { ok: false, error: "No se pudo enviar el correo. Intenta de nuevo." },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback sin API key: FormSubmit → envía a hildra.ti@gmail.com
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          company: company || "—",
          email,
          phone,
          message,
          _subject: subject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      },
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("FormSubmit error:", details);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el correo. Intenta de nuevo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Ocurrió un error al enviar. Intenta de nuevo." },
      { status: 500 },
    );
  }
}
