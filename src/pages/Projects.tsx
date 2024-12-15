import React, { useCallback, useMemo, useState } from "react";
import BipartiteLayout from "layouts/BipartiteLayout";
import Animated from "components/Animated";
import { defaultAnimationProps } from "constants/animations";
import Navigation from "components/Navigation";
import { NavItem } from "types/navigation";
import { useProjects } from "hooks/useProjects";
import { useProjectTypes } from "hooks/useProjectTypes";
import { ProjectType } from "types/project-type";
import ProjectCard from "components/ProjectCard";

const navItems: NavItem[] = [
  { name: "Home", to: "/home" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const defaultProjectType: ProjectType = {
  id: 0,
  name: "all",
  displayName: "All Projects",
};

const Projects: React.FC = () => {
  const {
    data: projects,
    isLoading: areProjectsLoading,
    isError: areProjectsError,
  } = useProjects();
  const {
    data: projectTypes,
    isLoading: areProjectTypesLoading,
    isError: areProjectTypesError,
  } = useProjectTypes();

  // TODO: Remove types with no projects
  const elevatedProjectTypes = useMemo(() => {
    if (!projectTypes || !projects) return [];
    const filterEmptyProjectTypes = projectTypes.filter((projectType) => {
      return projects.find((project) => project.type.id === projectType.id);
    });
    return [defaultProjectType, ...filterEmptyProjectTypes];
  }, [projectTypes, projects]);

  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectType>(defaultProjectType);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [previousProjectType, setPreviousProjectType] =
    useState<ProjectType>(defaultProjectType);

  const filteredProjects = useMemo(
    () =>
      selectedProjectType.name === "all"
        ? projects
        : projects?.filter(
            (project) => project.type.id === selectedProjectType.id
          ),
    [selectedProjectType, projects]
  );

  const changeCategory = useCallback(
    (newDirection: "up" | "down") => {
      setDirection(newDirection);
      setPreviousProjectType(selectedProjectType);
      setTimeout(() => {
        setSelectedProjectType((prev) => {
          const currentIndex = elevatedProjectTypes.indexOf(prev);
          return newDirection === "up"
            ? elevatedProjectTypes[
                (currentIndex - 1 + elevatedProjectTypes.length) %
                  elevatedProjectTypes.length
              ]
            : elevatedProjectTypes[
                (currentIndex + 1) % elevatedProjectTypes.length
              ];
        });
      }, 0); // Does not animate without setTimeout, so do not change
    },
    [elevatedProjectTypes, selectedProjectType]
  );

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
            {previousProjectType && (
              <Animated
                key={selectedProjectType.id}
                {...defaultAnimationProps}
                className="absolute w-full"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: direction === "up" ? 20 : -20 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-2xl text-left ml-1 font-bold text-primary">
                  {previousProjectType.displayName}
                </h2>
              </Animated>
            )}
            <Animated
              key={selectedProjectType.id}
              {...defaultAnimationProps}
              className="absolute w-full"
              initial={{ opacity: 0, y: direction === "up" ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-2xl text-left ml-1 font-bold text-primary">
                {selectedProjectType.displayName}
              </h2>
            </Animated>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <div className="overflow-y-auto border h-3/4 rounded-lg p-4 scrollbar-none mr-10">
        {(areProjectsLoading || areProjectTypesLoading) && (
          <p className="text-secondary">Loading projects...</p>
        )}
        {(areProjectsError || areProjectTypesError) && (
          <p className="text-secondary">Error loading projects.</p>
        )}
        {filteredProjects &&
          filteredProjects.map((project) => (
            <Animated
              // Composite key as they do not animate if already being rendered
              key={project.name + selectedProjectType.name}
              {...defaultAnimationProps}
              initial={{ opacity: 0, y: direction === "up" ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-2 border-b"
            >
              <ProjectCard project={project} />
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
