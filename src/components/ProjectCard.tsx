
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, onClick }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm border-0">
      <CardContent className="p-0 cursor-pointer" onClick={onClick}>
        <AspectRatio ratio={4/3} className="bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white font-medium text-lg">{title}</p>
            <p className="text-white/80 text-sm">{category}</p>
          </div>
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{category}</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
