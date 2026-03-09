import { useEffect, useState } from "react";

export default function CinematicCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-40 h-40 rounded-full blur-3xl opacity-10"
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
        background: "radial-gradient(circle, rgba(255,215,0,0.3), transparent)"
      }}
    />
  );
}
