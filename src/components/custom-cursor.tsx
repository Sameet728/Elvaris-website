'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [currentPosition, setCurrentPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const requestRef = useRef<number>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  // Smooth interpolation for cursor light
  useEffect(() => {
    const animate = () => {
      setCurrentPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1, // lerp factor
        y: prev.y + (targetPosition.y - prev.y) * 0.1
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPosition]);

  return (
    <div className="hidden md:block">
      {/* Premium Custom Cursor: Outer Lerping Ring */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[99999] h-8 w-8 rounded-full border border-white/40 transition-opacity duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        style={{
          transform: `translate3d(calc(${currentPosition.x}px - 50%), calc(${currentPosition.y}px - 50%), 0)`,
          opacity: visible ? 1 : 0
        }}
      />

      {/* Premium Custom Cursor: Inner Exact Dot */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[99999] h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{
          transform: `translate3d(calc(${targetPosition.x}px - 50%), calc(${targetPosition.y}px - 50%), 0)`,
          opacity: visible ? 1 : 0
        }}
      />
    </div>
  );
}
