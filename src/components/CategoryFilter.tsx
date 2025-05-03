
import React from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={activeCategory === 'all' ? "default" : "outline"}
        onClick={() => onCategoryChange('all')}
        className="rounded-full"
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
