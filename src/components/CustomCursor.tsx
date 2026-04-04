"use client";

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isPointer ? 'is-pointer' : ''}`}
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
      <div className="cursor-glow"></div>
    </div>
  );
};

export default CustomCursor;
