
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectDetailDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] p-0 overflow-hidden bg-white/95 backdrop-blur-sm max-h-[90vh] flex flex-col">
        <Button 
          onClick={onClose} 
          variant="secondary" 
          size="icon" 
          className="absolute top-4 right-4 z-50 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6 pt-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-contain rounded-lg shadow-md mb-6" 
            />
            
            <DialogHeader className="mt-4">
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">{project.category}</DialogDescription>
            </DialogHeader>
            
            <p className="my-4 text-foreground">{project.description}</p>
            
            <DialogFooter className="mt-6">
              <Button onClick={onClose}>Close</Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
