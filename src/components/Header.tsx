
import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="w-full py-8 text-center relative z-10">
      <div className="container px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 inline-flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          {title}
          <Sparkles className="h-6 w-6 text-primary" />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
