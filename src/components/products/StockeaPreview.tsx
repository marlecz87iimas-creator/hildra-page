export function StockeaPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-[#f8f5fc] text-[#2a1848] shadow-sm">
      <div className="border-b border-[#e4d4f4] bg-white px-3 py-2.5 sm:px-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-[#7c3aed]">Stockea</p>
            <p className="text-[10px] text-[#6d528c]">Inventario — Tienda Demo</p>
          </div>
          <span className="rounded-full bg-[#7c3aed] px-2.5 py-1 text-[10px] font-semibold text-white">
            Dashboard
          </span>
        </div>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-4 sm:p-4">
        {[
          { label: "Productos", value: "128", tone: "bg-[#f3e8ff] text-[#7c3aed]" },
          { label: "Stock bajo", value: "6", tone: "bg-[#fef3c7] text-[#d97706]" },
          { label: "Valor total", value: "$84k", tone: "bg-[#ecfdf5] text-[#16a34a]" },
          { label: "Ventas hoy", value: "14", tone: "bg-[#eff6ff] text-[#2563eb]" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 ${stat.tone}`}
          >
            <p className="text-[9px] font-medium uppercase tracking-wide opacity-80 sm:text-[10px]">
              {stat.label}
            </p>
            <p className="mt-0.5 text-base font-bold sm:text-lg">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mx-3 mb-3 overflow-hidden rounded-xl border border-[#e4d4f4] bg-white sm:mx-4 sm:mb-4">
        <div className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.5fr] gap-2 border-b border-[#e4d4f4] bg-[#f3eefb] px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-[#6d528c] sm:text-[10px]">
          <span>Producto</span>
          <span>Stock</span>
          <span>Precio</span>
          <span>Estado</span>
        </div>
        {[
          { name: "Hilo algodón 500g", stock: "42", price: "$85", ok: true },
          { name: "Cierre metálico #5", stock: "8", price: "$12", ok: false },
          { name: "Tela lino natural", stock: "23", price: "$190", ok: true },
        ].map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[1.4fr_0.6fr_0.6fr_0.5fr] gap-2 border-b border-[#f3eefb] px-3 py-2 text-[10px] last:border-0 sm:text-xs"
          >
            <span className="truncate font-medium">{row.name}</span>
            <span>{row.stock}</span>
            <span>{row.price}</span>
            <span className={row.ok ? "text-[#16a34a]" : "text-[#d97706]"}>
              {row.ok ? "OK" : "Bajo"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
