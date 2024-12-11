import React from "react";
import Navigation from "components/Navigation";
import Animated from "components/Animated";
import { NavItem } from "types/navigation";
import { defaultAnimationProps } from "constants/animations";

const navItems: NavItem[] = [
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const Home: React.FC = (props) => {
  return (
    // This bipartite layout is used in multiple pages, make it a reusable custom layout
    <div className="container mx-auto h-screen flex">
      <div className="flex-grow flex flex-col justify-center items-start">
        <div className="flex flex-row">
          <Animated {...defaultAnimationProps} className="ml-10">
            <img
              src="/images/logo-options/image.png"
              alt="J"
              className="w-12 h-12 object-contain rounded-full"
            />
          </Animated>
          <div className="flex flex-col items-start ml-2">
            <Animated {...defaultAnimationProps}>
              <h1 className="text-4xl text-secondary">
                Hey, I'm <span className="font-bold text-primary">Jeenit.</span>
              </h1>
            </Animated>
            <Animated
              {...defaultAnimationProps}
              transition={{ ...defaultAnimationProps.transition, delay: 0.5 }}
            >
              <p className="text-2xl text-secondary mt-2">
                Web Developer, Creative Coder, Game Maker
              </p>
            </Animated>
            <Animated
              {...defaultAnimationProps}
              transition={{ ...defaultAnimationProps.transition, delay: 0.5 }}
            >
              <p className="text-lg text-secondary text-left mt-2">
                Whether it's a slick{" "}
                <span className="font-bold text-primary">website</span> or a new{" "}
                <span className="font-bold text-primary">game</span> idea, I'm{" "}
                <span className="font-bold text-primary">always building</span>{" "}
                something.
              </p>
            </Animated>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center">
        <Navigation navItems={navItems} />
      </div>
    </div>
  );
};

export default Home;
