import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  sub,
  children,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-20 pb-14 overflow-hidden">
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full blue-blob" />
      <div className="absolute -top-10 right-10 h-56 w-56 rounded-full blue-blob opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {kicker && (
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary">
            {kicker}
          </div>
        )}
        <h1 className="display-xl text-5xl sm:text-6xl md:text-7xl max-w-4xl">
          <span className="gradient-text">{title}</span>
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
