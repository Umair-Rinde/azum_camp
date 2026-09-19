type PageBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="paper-texture molecular-pattern border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        {eyebrow ? (
          <p className="text-xs tracking-[0.22em] text-gold uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-muted">{description}</p> : null}
        <div className="academic-divider mt-8 max-w-xs" />
      </div>
    </section>
  );
}
