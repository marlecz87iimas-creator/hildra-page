import Image from "next/image";

export function WebPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e8ddd0] bg-[#fbf7f0] shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-[#e8ddd0] bg-white px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff7f6e]" />
        <span className="size-2 rounded-full bg-[#f6c86f]" />
        <span className="size-2 rounded-full bg-[#2dbaa1]" />
        <div className="ml-2 truncate rounded-md bg-[#fbf7f0] px-2 py-0.5 text-[9px] font-medium text-[#7a1832] sm:text-[10px]">
          www.losguerrerosrugbyescarcega.org
        </div>
      </div>

      <div className="flex items-center justify-end gap-1.5 border-b-4 border-[#c9a227] bg-[#7a1832] px-3 py-2 text-[10px] font-semibold text-white sm:text-xs">
        <span className="rounded px-1.5 py-0.5">Noticias</span>
        <span className="rounded px-1.5 py-0.5">Galería</span>
        <span className="rounded border-2 border-[#c9a227] bg-[#c9a227] px-1.5 py-0.5 font-bold text-[#141414]">
          Admin
        </span>
      </div>

      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="overflow-hidden rounded-xl border-2 border-black/10 bg-white shadow-sm">
          <Image
            src="/products/guerreros-preview.png"
            alt="Los Guerreros Rugby Escárcega — Fuerza, pasión, inclusión y equipo"
            width={1024}
            height={409}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pb-1">
          <p className="text-[10px] font-medium text-[#141414]/70 sm:text-xs">
            Noticias, galería y vida del club en Escárcega.
          </p>
          <div className="flex gap-1.5">
            <span className="rounded-lg bg-[#7a1832] px-2.5 py-1 text-[9px] font-bold text-white sm:text-[10px]">
              Ver noticias
            </span>
            <span className="rounded-lg border-2 border-[#1f4d2e] bg-white px-2.5 py-1 text-[9px] font-semibold text-[#1f4d2e] sm:text-[10px]">
              Ver galería
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 grid gap-2 border-t border-[#1f4d2e]/15 bg-[#e8f0ea] p-3 sm:grid-cols-2 sm:p-4">
        <div className="rounded-xl bg-white p-2.5 ring-1 ring-[#1f4d2e]/15 sm:p-3">
          <p className="text-[9px] font-bold tracking-[0.16em] text-[#c9a227] uppercase sm:text-[10px]">
            Actualidad
          </p>
          <p className="mt-1 text-[11px] font-black text-[#1f4d2e] sm:text-xs">Últimas noticias</p>
          <p className="mt-1 text-[9px] text-[#141414]/70 sm:text-[10px]">
            Novedades, resultados y anuncios del club.
          </p>
        </div>
        <div className="rounded-xl bg-white p-2.5 ring-1 ring-[#1f4d2e]/15 sm:p-3">
          <p className="text-[9px] font-bold tracking-[0.16em] text-[#c9a227] uppercase sm:text-[10px]">
            Recuerdos
          </p>
          <p className="mt-1 text-[11px] font-black text-[#1f4d2e] sm:text-xs">Galería de fotos</p>
          <p className="mt-1 text-[9px] text-[#141414]/70 sm:text-[10px]">
            Entrenamiento, partidos y vida del club.
          </p>
        </div>
      </div>
    </div>
  );
}
