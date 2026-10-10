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
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs tracking-[0.22em] text-gold uppercase",
            centered ? "text-center" : "text-left",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-2 text-3xl md:text-4xl", centered && "text-center")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-2xl text-muted",
            centered ? "mx-auto text-center" : "text-left",
          )}
        >
          {description}
        </p>
      ) : null}
      <div className={cn("academic-divider mt-6", centered ? "mx-auto max-w-xs" : "max-w-xs")} />
    </div>
  );
}
