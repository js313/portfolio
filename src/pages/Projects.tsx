import React, { useState } from "react";
import BipartiteLayout from "layouts/BipartiteLayout";
import Animated from "components/Animated";
import { defaultAnimationProps } from "constants/animations";
import Navigation from "components/Navigation";
import { NavItem } from "types/navigation";

const navItems: NavItem[] = [
  { name: "Home", to: "/home" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

// Dummy project data
const allProjects = [
  { id: 1, title: "Portfolio Website", type: "Web" },
  { id: 2, title: "Racing Game", type: "Game" },
  { id: 3, title: "Metaballs Animation", type: "Creative" },
  { id: 4, title: "Weather App", type: "Web" },
  { id: 5, title: "Platformer Game", type: "Game" },
  { id: 6, title: "Fractal Generator", type: "Miscellaneous" },
];

const categories = [
  "All Projects",
  "Web Projects",
  "Game Projects",
  "Creative Projects",
  "Miscellaneous Projects",
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [previousCategory, setPreviousCategory] = useState("All Projects");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All Projects"
      ? allProjects
      : allProjects.filter(
          (project) => project.type === selectedCategory.split(" ")[0]
        );

  const changeCategory = (newDirection: "up" | "down") => {
    setDirection(newDirection);
    setPreviousCategory(selectedCategory);
    setTimeout(() => {
      setSelectedCategory((prev) => {
        const currentIndex = categories.indexOf(prev);
        return newDirection === "up"
          ? categories[
              (currentIndex - 1 + categories.length) % categories.length
            ]
          : categories[(currentIndex + 1) % categories.length];
      });
    }, 300);
  };

  const leftContent = (
    <div className="p-6 w-4/5 h-full content-center">
      {/* Title and category switcher */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <div className="flex flex-col">
            <button
              onClick={() => changeCategory("down")}
              className="text-2xl text-gray-500 hover:text-gray-700 transform rotate-90"
            >
              &lsaquo;
            </button>
            <button
              onClick={() => changeCategory("up")}
              className="text-2xl text-gray-500 hover:text-gray-700 transform rotate-90"
            >
              &rsaquo;
            </button>
          </div>
          <div className="relative w-64 flex items-center justify-center ml-2">
            {previousCategory && (
              <Animated
                key={selectedCategory}
                {...defaultAnimationProps}
                className="absolute w-full"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: direction === "up" ? 20 : -20 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-2xl text-left ml-1 font-bold text-primary">
                  {previousCategory}
                </h2>
              </Animated>
            )}
            <Animated
              key={selectedCategory}
              {...defaultAnimationProps}
              className="absolute w-full"
              initial={{ opacity: 0, y: direction === "up" ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-2xl text-left ml-1 font-bold text-primary">
                {selectedCategory}
              </h2>
            </Animated>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <div className="overflow-y-auto border h-3/4 rounded-lg p-4">
        {filteredProjects.map((project) => (
          <Animated
            key={project.id}
            {...defaultAnimationProps}
            initial={{ opacity: 0, y: direction === "up" ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-2 border-b"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">Category: {project.type}</p>
          </Animated>
        ))}
      </div>
    </div>
  );

  const rightContent = <Navigation navItems={navItems} />;

  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Projects;
