"use client";

import { useEffect, useState } from "react";
import { CursorWrapper } from "./styles";

export default function LemonCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  return (
    <CursorWrapper
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      🍋
    </CursorWrapper>
  );
}
