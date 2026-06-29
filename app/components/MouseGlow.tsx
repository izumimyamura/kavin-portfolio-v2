"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0 transition-transform duration-200 ease-out"
      style={{
        left: position.x - 220,
        top: position.y - 220,
      }}
    >
      <div
        className="
          h-[440px]
          w-[440px]
          rounded-full
          bg-white/10
          blur-[140px]
        "
      />
    </div>
  );
}
