
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
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">{project.category}</DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-md object-cover" 
          />
        </div>
        <p className="text-foreground">{project.description}</p>
        <DialogFooter className="mt-4">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
