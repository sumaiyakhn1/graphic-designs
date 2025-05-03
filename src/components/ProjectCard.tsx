
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
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
      <CardContent className="p-0 cursor-pointer" onClick={onClick}>
        <AspectRatio ratio={4/3} className="bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
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
