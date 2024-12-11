import React from "react";
import Animated from "components/Animated";
import { defaultAnimationProps } from "constants/animations";
import BipartiteLayout from "layouts/BipartiteLayout";
import { NavItem } from "types/navigation";
import Navigation from "components/Navigation";

const navItems: NavItem[] = [
  // TODO: Make dynamic, get form backend
  { name: "Home", to: "/home" },
  { name: "Contact", to: "/contact" },
  { name: "Resume", to: "/api/backend" },
];

const About: React.FC = () => {
  const leftContent = (
    <div className="w-3/4 text-left">
      <Animated {...defaultAnimationProps}>
        <h1 className="text-4xl font-bold text-primary">About Me</h1>
      </Animated>
      <Animated
        {...defaultAnimationProps}
        transition={{ ...defaultAnimationProps.transition, delay: 0.3 }}
      >
        <p className="text-lg text-secondary mt-4 ml-6">
          I’m Jeenit Sharma, a passionate developer with 3 years of experience
          in backend development. Skilled in Node.js, AWS, Java, Spring Boot,
          and a variety of databases including MySQL, PostgreSQL, MongoDB, and
          more.
        </p>
      </Animated>
      <Animated
        {...defaultAnimationProps}
        transition={{ ...defaultAnimationProps.transition, delay: 0.6 }}
      >
        <p className="text-lg text-secondary mt-4 ml-6">
          Beyond backend work, I explore creative coding, build web
          applications, and develop games using Unity and Godot. Whether it’s
          crafting a performant API or designing visually appealing interfaces,
          I enjoy every step of the process.
        </p>
      </Animated>
      <Animated
        {...defaultAnimationProps}
        transition={{ ...defaultAnimationProps.transition, delay: 0.9 }}
      >
        <h2 className="text-2xl font-bold text-primary mt-6">Skills</h2>
        <ul className="list-disc ml-6 mt-2 text-secondary">
          <li>Node.js, AWS, Java, Spring Boot</li>
          <li>MySQL, PostgreSQL, MongoDB, DynamoDB</li>
          <li>Unity, Godot, C++</li>
          <li>Frontend: React, TypeScript</li>
          <li>Creative Coding: p5.js, Processing</li>
        </ul>
      </Animated>
    </div>
  );

  const rightContent = <Navigation navItems={navItems} />;

  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default About;
