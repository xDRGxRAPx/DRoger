export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] rounded-full blur-[180px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.12), transparent)"
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] rounded-full blur-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)"
        }}
      />
    </div>
  );
}
