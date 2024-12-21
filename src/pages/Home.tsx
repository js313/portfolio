import React, { useMemo } from "react";
import Navigation from "components/Navigation";
import Animated from "components/Animated";
import { NavItem } from "types/navigation";
import { defaultAnimationProps } from "constants/animations";
import BipartiteLayout from "layouts/BipartiteLayout";

const navItems: NavItem[] = [
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const Home: React.FC = () => {
  const leftContent = useMemo(
    () => (
      <div className="flex md:flex-row flex-col gap-y-16">
        <Animated
          {...defaultAnimationProps}
          className="flex items-center justify-center"
        >
          <img
            src="/images/logo-options/image.png"
            alt="J"
            className="w-24 h-24 object-contain rounded-full"
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
            <p className="text-2xl text-secondary md:mt-1 mt-3">
              Web Developer, Creative Coder, Game Maker
            </p>
          </Animated>
          <Animated
            {...defaultAnimationProps}
            transition={{ ...defaultAnimationProps.transition, delay: 0.5 }}
          >
            <p className="text-lg text-secondary md:mt-3 mt-6">
              Whether it's a slick{" "}
              <span className="font-bold text-primary">website</span> or a new{" "}
              <span className="font-bold text-primary">game</span> idea, I'm{" "}
              <span className="font-bold text-primary">always building</span>{" "}
              something.
            </p>
          </Animated>
        </div>
      </div>
    ),
    []
  );

  const rightContent = <Navigation navItems={navItems} />;

  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Home;
