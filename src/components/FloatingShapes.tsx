
import React, { useEffect, useState } from 'react';

interface Shape {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  color: string;
  delay: number;
  duration: number;
  colorChange: boolean;
}

const FloatingShapes: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = ['bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-cyan-300', 'bg-pink-200', 'bg-violet-200'];
    const newShapes: Shape[] = [];
    
    // Create shapes for the background
    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        size: Math.floor(Math.random() * 150) + 50,
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity for subtlety
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.floor(Math.random() * 8),
        duration: Math.floor(Math.random() * 10) + 15, // Longer animation duration
        colorChange: Math.random() > 0.5 // Randomly assign color change animation
      });
    }
    
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute rounded-full blur-xl ${shape.color}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            opacity: shape.opacity,
            animation: `${shape.colorChange ? 'color-shift' : 'float'} ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
      
      {/* Add color-changing gradient background */}
      <div 
        className="absolute inset-0 -z-20" 
        style={{
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          opacity: 0.05
        }}
      />
    </div>
  );
};

export default FloatingShapes;
