import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center pt-28 pb-20">
      <Container className="text-center">
        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          La ruta que buscas no existe o fue movida.
        </p>
        <Link
          href="/#inicio"
          className="mt-8 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
        >
          Ir al inicio
        </Link>
      </Container>
    </div>
  );
}
