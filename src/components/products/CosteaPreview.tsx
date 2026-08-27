export function CosteaPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-[#FAF5FF] text-[#4C1D5C] shadow-sm">
      <div className="flex min-h-[280px] sm:min-h-[320px]">
        <aside className="hidden w-[28%] shrink-0 border-r border-[#EDE4F7] bg-white p-3 sm:block">
          <div className="text-sm font-extrabold text-[#A855F7]">Costea</div>
          <p className="mt-1 text-[10px] leading-snug text-[#7C5C8A]">
            Taller Creativo Demo
          </p>
          <nav className="mt-4 space-y-1">
            {["Proyectos", "Cotizaciones", "Citas", "Inventario"].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-1.5 text-[10px] font-medium ${
                  i === 0
                    ? "bg-[#F3E8FF] text-[#9333EA]"
                    : "text-[#7C5C8A]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h4 className="text-sm font-bold sm:text-base">Proyectos activos</h4>
            <span className="rounded-full bg-[#A855F7] px-2.5 py-1 text-[10px] font-semibold text-white">
              + Nuevo
            </span>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { name: "Bolsa tejida", cost: "$420", price: "$680", margin: "38%" },
              { name: "Set macramé", cost: "$310", price: "$520", margin: "40%" },
              { name: "Collar resina", cost: "$185", price: "$350", margin: "47%" },
            ].map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-[#EDE4F7] bg-white p-2.5 sm:p-3"
              >
                <p className="text-[11px] font-semibold sm:text-xs">{project.name}</p>
                <div className="mt-2 grid grid-cols-2 gap-1 text-[9px] sm:text-[10px]">
                  <div className="rounded-md bg-[#FDF2F8] px-1.5 py-1 text-[#DB2777]">
                    Costo {project.cost}
                  </div>
                  <div className="rounded-md bg-[#F3E8FF] px-1.5 py-1 text-[#9333EA]">
                    Precio {project.price}
                  </div>
                </div>
                <p className="mt-2 text-[9px] text-[#16A34A] sm:text-[10px]">
                  Margen {project.margin}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-[#EDE4F7] bg-white p-2.5 sm:p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7C5C8A]">
              Cotización reciente
            </p>
            <div className="mt-2 flex items-center justify-between gap-2 text-[10px] sm:text-xs">
              <span>Arreglo floral — Cliente Ana</span>
              <span className="font-bold text-[#A855F7]">$1,250</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
