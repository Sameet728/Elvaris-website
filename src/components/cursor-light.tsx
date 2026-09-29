'use client';

import { useEffect, useRef, useState } from 'react';

export function CursorLight() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes data-stream {
          0% { transform: translateY(-150vh); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(150vh); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}} />

      {/* Base Ambient Dark Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(1200px circle at 50% 0%, rgba(200, 220, 255, 0.02), transparent 70%)'
        }}
      />

      {/* Motion Graphics: Sweeping Conic Light */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen opacity-70">
        <div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] mix-blend-screen origin-center blur-[120px]"
          style={{
            background: 'conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(200, 220, 255, 0.15) 60deg, transparent 120deg)',
            animation: 'spin-slow 35s linear infinite'
          }}
        />
        <div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] mix-blend-screen origin-center blur-[100px]"
          style={{
            background: 'conic-gradient(from 270deg at 50% 50%, transparent 0deg, rgba(255, 255, 255, 0.1) 40deg, transparent 90deg)',
            animation: 'spin-slow 25s linear infinite reverse'
          }}
        />
      </div>

      {/* Motion Graphics: Animated Data Streams */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen opacity-40">
        <div className="absolute inset-0 flex justify-evenly">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="w-[1px] h-[40vh]"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                animation: `data-stream ${10 + i * 3}s linear infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Static Pulse for Depth */}
      <div 
        className="pointer-events-none fixed top-[40%] left-[50%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(200, 220, 255, 0.08) 0%, transparent 60%)',
          animation: 'pulse-glow 10s infinite ease-in-out',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Interactive Smooth Cursor Light Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(600px circle at ${currentPosition.x}px ${currentPosition.y}px, rgba(255, 255, 255, 0.08) 0%, rgba(200, 220, 255, 0.03) 30%, transparent 60%)`
        }}
      />
    </>
  );
}
