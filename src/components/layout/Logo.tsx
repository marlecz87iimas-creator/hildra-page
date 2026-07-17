import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "light";
};

export function Logo({
  className,
  showWordmark = true,
  variant = "default",
}: LogoProps) {
  const light = variant === "light";

  return (
    <Link
      href="/#inicio"
      className={cn("inline-flex items-center gap-2.5 focus-ring rounded-lg", className)}
      aria-label={`${SITE.name} ${SITE.brandLine} — Inicio`}
    >
      <Image
        src="/brand/hildra-icon.png"
        alt=""
        width={40}
        height={40}
        className="size-9 rounded-md bg-white object-contain p-0.5 sm:size-10"
        priority
      />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-bold tracking-[0.08em] uppercase sm:text-xl",
              light ? "text-white" : "text-foreground",
            )}
          >
            {SITE.name}
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-medium tracking-[0.14em] uppercase sm:text-[11px]",
              light ? "text-white/70" : "text-muted",
            )}
          >
            {SITE.brandLine}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
