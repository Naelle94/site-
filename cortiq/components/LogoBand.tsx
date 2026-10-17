import { toolLogos } from "@/lib/content";

export function LogoBand() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
      {toolLogos.map((logo) => (
        <span
          key={logo.id}
          className="text-lg font-medium tracking-tight text-fg/60"
        >
          {logo.name}
        </span>
      ))}
    </div>
  );
}
