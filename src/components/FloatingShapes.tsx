
import React, { useEffect, useState } from 'react';

interface Shape {
  id: number;
  size: number;
  top: number;
  left: number;
  color: string;
  delay: number;
}

const FloatingShapes: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = ['bg-girly-pink', 'bg-girly-purple', 'bg-girly-peach', 'bg-girly-blue'];
    const newShapes: Shape[] = [];
    
    // Create shapes for the background
    for (let i = 0; i < 8; i++) {
      newShapes.push({
        id: i,
        size: Math.floor(Math.random() * 150) + 50,
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.floor(Math.random() * 5)
      });
    }
    
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`floating-shape ${shape.color} animate-float`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
