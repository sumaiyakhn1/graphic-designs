
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
    description: "A complete brand identity for a luxury fashion label, including logo design, color palette, typography, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800",
    category: "Branding"
  },
  {
    id: 2,
    title: "Website Redesign",
    description: "A modern, responsive website redesign for a beauty company with e-commerce integration and custom illustrations.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "A series of eye-catching graphics designed for Instagram, Facebook, and Pinterest to promote a new product line.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800",
    category: "Social Media"
  },
  {
    id: 4,
    title: "Product Packaging",
    description: "Custom packaging design for a cosmetic line, featuring delicate illustrations and a soft color palette.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800",
    category: "Packaging"
  },
  {
    id: 5,
    title: "Magazine Layout",
    description: "Editorial design for a fashion magazine, featuring custom typography and artistic photo arrangements.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
    category: "Print"
  },
  {
    id: 6,
    title: "App Interface",
    description: "UI/UX design for a lifestyle mobile application with playful animations and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800",
    category: "UI/UX"
  },
  {
    id: 7,
    title: "Event Poster",
    description: "Vibrant poster design for a music festival, combining typography and illustration.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800", 
    category: "Print"
  },
  {
    id: 8,
    title: "Logo Collection",
    description: "A collection of minimal logo designs for various clients across different industries.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
    category: "Branding"
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
    <div className="min-h-screen bg-animation relative overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header 
          title="My Design Portfolio" 
          subtitle="A collection of my graphic design work"
        />
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-float" style={{ animationDelay: `${project.id * 0.1}s` }}>
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
        <p>© {new Date().getFullYear()} My Design Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
