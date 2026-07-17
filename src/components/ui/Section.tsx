import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  alt?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  alt = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-16 sm:py-20 lg:py-24",
        alt && "bg-section-alt",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
