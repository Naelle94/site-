export function ExampleVideo({
  caption = "Exemple de format — pas une vidéo client réelle.",
}: {
  caption?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[220px]">
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <video
          src="/exemple-ugc.mp4"
          className="aspect-[9/16] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
        {caption}
      </p>
    </div>
  );
}
