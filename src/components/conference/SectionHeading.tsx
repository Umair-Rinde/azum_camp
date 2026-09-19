import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="text-xs tracking-[0.22em] text-gold uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-muted">{description}</p> : null}
      <div className={cn("academic-divider mt-6", align === "center" ? "mx-auto max-w-xs" : "max-w-xs")} />
    </div>
  );
}
