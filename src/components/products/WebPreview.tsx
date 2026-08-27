export function WebPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dde2ea] bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-[#e8e8e8] bg-[#f2f4f7] px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff7f6e]" />
        <span className="size-2 rounded-full bg-[#f6c86f]" />
        <span className="size-2 rounded-full bg-[#2dbaa1]" />
        <div className="ml-2 h-4 flex-1 rounded-md bg-white/80" />
      </div>

      <div className="bg-[#1a1f2e] px-4 py-6 text-white sm:px-6 sm:py-8">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-[#2dbaa1] uppercase sm:text-xs">
          Club deportivo
        </p>
        <h4 className="mt-2 max-w-[16rem] text-base font-bold leading-tight sm:text-lg">
          Bienvenidos a Los Guerreros Rugby
        </h4>
        <p className="mt-2 max-w-[18rem] text-[10px] leading-relaxed text-white/70 sm:text-xs">
          Noticias, galería de fotos y actualidad del equipo en un sitio rápido y
          responsive.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-[#2dbaa1] px-3 py-1.5 text-[10px] font-semibold sm:text-xs">
            Ver noticias
          </span>
          <span className="rounded-full border border-white/30 px-3 py-1.5 text-[10px] font-semibold sm:text-xs">
            Galería
          </span>
        </div>
      </div>

      <div className="grid gap-2 bg-[#f2f4f7] p-3 sm:grid-cols-3 sm:p-4">
        {[
          { title: "Noticias", desc: "Resultados y anuncios" },
          { title: "Galería", desc: "Momentos del club" },
          { title: "Contacto", desc: "WhatsApp y redes" },
        ].map((block) => (
          <div
            key={block.title}
            className="rounded-xl border border-[#dde2ea] bg-white p-2.5 sm:p-3"
          >
            <p className="text-[11px] font-bold text-[#1a1f2e] sm:text-xs">{block.title}</p>
            <p className="mt-1 text-[9px] text-[#5a6478] sm:text-[10px]">{block.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
