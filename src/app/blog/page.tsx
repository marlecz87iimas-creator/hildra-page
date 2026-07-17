import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Próximamente: artículos sobre desarrollo de software, digitalización y crecimiento empresarial por Hildra.",
};

export default function BlogPage() {
  const hasPosts = blogPosts.length > 0;

  return (
    <div className="bg-section-alt pt-28 pb-20">
      <Container className="max-w-3xl">
        <Link
          href="/#inicio"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Blog
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground">
            Ideas para digitalizar y crecer
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Este espacio está preparado para contenido editorial e integración con
            un CMS. Pronto publicaremos guías, casos y aprendizajes de Hildra.
          </p>
        </div>

        {hasPosts ? (
          <div className="mt-12 space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/70 px-6 py-14 text-center">
            <Newspaper className="mx-auto size-10 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Pronto habrá contenido aquí
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              La arquitectura ya contempla posts tipados y rutas listas para un
              headless CMS (por ejemplo Contentful, Sanity o un MDX local).
            </p>
            <Button href="/#contacto" className="mt-8">
              Hablar con Hildra
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
