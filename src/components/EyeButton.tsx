"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function EyeButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Batasi gerak mata agar tetap realistis
      const maxMove = 6;
      const angle = Math.atan2(dy, dx);
      const x = Math.cos(angle) * maxMove;
      const y = Math.sin(angle) * maxMove;

      setEyePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Button
      ref={buttonRef}
      onClick={() => (window.location.href = "/guru")}
      className="relative px-6 py-3 text-base font-semibold flex items-center gap-2 group"
    >
      {/* Mata */}
      <div className="relative w-5 h-5 bg-white rounded-full border border-black flex items-center justify-center">
        <div
          className="w-2 h-2 bg-black rounded-full transition-transform duration-100"
          style={{
            transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
          }}
        />
      </div>
      <div className="relative w-5 h-5 bg-white rounded-full border border-black flex items-center justify-center">
        <div
          className="w-2 h-2 bg-black rounded-full transition-transform duration-100"
          style={{
            transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
          }}
        />
      </div>

      <span className="ml-1 group-hover:underline transition">Lihat semua guru</span>
    </Button>
  );
}
