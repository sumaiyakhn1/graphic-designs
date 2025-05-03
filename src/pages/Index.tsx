
import React, { useState } from 'react';
import Header from '@/components/Header';
import FloatingShapes from '@/components/FloatingShapes';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailDialog from '@/components/ProjectDetailDialog';
import CategoryFilter from '@/components/CategoryFilter';

// Sample project data - replace with your actual design projects
const projectsData = [
  {
    id: 1,
    title: "Elegant Branding",
    description: "A clean and professional event identity for ONCOSHALA – 3, featuring cohesive colors, bold typography, and clear layout to highlight key oncology summit details.",
    image: "/images/oncoshala.png",
    category: "Branding"
  },
  {
    id: 2,
    title: "Website Redesign",
    description: "A sleek and modern website design for ONCOSHALA–3, crafted to reflect the event’s focus on innovation in oncology with intuitive navigation, cohesive branding, and a professional visual aesthetic.",
    image: "/images/oncoshala-website.jpg",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Agenda",
    description: "A series of eye-catching graphics designed for Instagram, Facebook, and Pinterest to promote a new product line.",
    image: "/images/indusagenda.png",
    category: "Agenda Poster"
  },
  {
    id: 4,
    title: "Agenda",
    description: "A visually organized and elegant agenda design for ONCOSHALA–3, featuring a calming blue theme that enhances readability while aligning with the event’s professional and medical tone.",
    image: "/images/oncoshalaagenda.png",
    category: "Agenda Poster"
  },
  {
    id: 5,
    title: "Invitation Poster",
    description: "A warm and scenic event invite design for Clinzerv’s Team Meeting & Award Night, blending professionalism with a serene Kashmiri backdrop.",
    image: "/images/8.12.png",
    category: "Print"
  },
  {
    id: 6,
    title: "Certificate",
    description: "A sophisticated certificate design for Kumaon Cancer Conclave, featuring a refined beige-brown aesthetic that conveys warmth, elegance, and formal recognition.",
    image: "/images/certificate.png",
    category: "Print"
  },
  {
    id: 7,
    title: "Event Poster",
    description: "A visually inviting event poster for Clinzerv’s Team Meeting & Award Night, combining elegance with the tranquil charm of Srinagar.",
    image: "/images/8.12 (1).png", 
    category: "Print"
  },
  {
    id: 8,
    title: "Logo",
    description: "A bold and symbolic logo for Kumaon Cancer Conclave, featuring a tiger to represent strength, courage, and the fierce fight against cancer.",
    image: "/images/kumaonlogo.jpg",
    category: "Branding"
  },
  {
    id: 9,
    title: "Website Redesign",
    description: "A beautifully crafted website for DreamKnot Creations, showcasing handcrafted carpets and rugs with an elegant layout, earthy tones, and a focus on artisanal detail and storytelling.",
    image: "/images/dkc.jpg",
    category: "Web Design"
  }
];

const Index: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories
  const categories = Array.from(new Set(projectsData.map(project => project.category)));

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header 
          title="Design Portfolio" 
          subtitle="Showcasing creative design work"
        />
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${project.id * 0.1}s` }}>
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                onClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      <footer className="mt-16 py-6 text-center text-sm text-muted-foreground relative z-10">
        <p>© {new Date().getFullYear()} Design Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
