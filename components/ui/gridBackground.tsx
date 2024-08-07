import React, { ReactNode } from "react";

export function GridBackgroundDemo({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className="h-full w-full dark:bg-slate-900 bg-pink-100  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-pink-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={className}>{children}</div>
    </section>
  );
}
