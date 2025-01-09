import React, { useMemo } from "react";
import Animated from "components/Animated";
import { defaultAnimationProps } from "constants/animations";
import BipartiteLayout from "layouts/BipartiteLayout";
import { NavItem } from "types/navigation";
import Navigation from "components/Navigation";
import { useResume } from "hooks/useResume";
import { shouldUseStatic } from "config";

const About: React.FC = () => {
  const { mutateAsync: fetchResume } = useResume();

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", to: "/home" },
      ...(!shouldUseStatic ? [{ name: "Contact", to: "/contact" }] : []),
      {
        name: "Leetcode",
        to: process.env.REACT_APP_LEETCODE_LINK || "https://leetcode.com/JS00",
        openInNewTab: true,
      },
      {
        name: "Resume",
        to: "/resume/resume.pdf", // No use just for completion sake
        customHandler: async () => {
          const resumeUrl = await fetchResume();
          if (resumeUrl) {
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.download = "resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(resumeUrl), 5000);
          }

          const googleDriveLink = process.env.REACT_APP_RESUME_GDRIVE_LINK;
          window.open(googleDriveLink, "_blank");
        },
      },
    ],
    [fetchResume]
  );

  const leftContent = useMemo(
    () => (
      <div className="md:w-3/4 text-left w-full md:h-auto overflow-y-scroll scrollbar-none">
        <Animated {...defaultAnimationProps}>
          <h1 className="text-4xl font-bold text-primary">About Me</h1>
        </Animated>
        <Animated
          {...defaultAnimationProps}
          transition={{ ...defaultAnimationProps.transition, delay: 0.3 }}
        >
          <p className="text-lg text-secondary mt-4 ml-6">
            I’m Jeenit Sharma, a passionate developer with years of experience
            in building scalable and efficient systems. I enjoy turning complex
            problems into elegant solutions. I’m all about finding smart
            solutions and making things better every step of the way.
          </p>
        </Animated>
        <Animated
          {...defaultAnimationProps}
          transition={{ ...defaultAnimationProps.transition, delay: 0.6 }}
        >
          <p className="text-lg text-secondary mt-4 ml-6">
            When I’m not coding for work, I dive into creative projects like
            designing games or crafting fun visual effects. I enjoy exploring
            new ideas, experimenting with different techniques, and learning
            something new with every project I take on.
          </p>
        </Animated>
        <Animated
          {...defaultAnimationProps}
          transition={{ ...defaultAnimationProps.transition, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-primary mt-6">Skills</h2>
          <ul className="list-disc ml-6 mt-2 text-secondary">
            <li>Backend: Node.js, AWS, Java, Spring Boot</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB, DynamoDB</li>
            <li>Frontend: React, TypeScript, Modern UI/UX Design</li>
            <li>Game Development: Unity, Godot, C++</li>
            <li>
              Creative Coding: p5.js, Processing, Algorithm Visualizations
            </li>
          </ul>
        </Animated>
      </div>
    ),
    []
  );

  const rightContent = <Navigation navItems={navItems} />;

  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default About;
