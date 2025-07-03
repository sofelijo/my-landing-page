"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function TanyaBotButtonHorizontal() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Button
      asChild
      className="bg-white hover:bg-gray-100 px-6 py-5 rounded-xl shadow-md transition-all w-full text-left justify-start gap-4"
      variant="outline"
    >
      <a
        href="https://t.me/SS01JU_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-full"
      >
        <motion.div
          className="h-14 w-14 shrink-0"
          style={{
            transform: `translate(${position.x * 10}px, ${position.y * 10}px)`,
          }}
        >
          <Bot className="w-full h-full text-primary drop-shadow" />
        </motion.div>

        <div className="text-sm font-medium text-primary leading-snug">
          <div>Tanya sekolah?</div>
          <div>Klik di sini!</div>
        </div>
      </a>
    </Button>
  );
}
