export function ExampleVideo({
  caption = "Exemple de format, pas une vidéo client réelle.",
}: {
  caption?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
        <video
          src="/exemple-ugc.mp4"
          className="aspect-[9/16] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        <span className="pointer-events-none absolute left-2 top-2 rounded-[3px] bg-void px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-white">
          Produit par IA · Pensé par une humaine
        </span>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        {caption}
      </p>
    </div>
  );
}
