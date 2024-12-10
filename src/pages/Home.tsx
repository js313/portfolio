import React from "react";
import Navigation from "components/Navigation";
import Animated from "components/Animated";

const defaultAnimationProps = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.1 },
};

const Home: React.FC = () => {
  return (
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
              <h1 className="text-4xl text-textSecondary">
                Hey, I'm{" "}
                <span className="font-bold text-textPrimary">Jeenit.</span>
              </h1>
            </Animated>
            <Animated {...defaultAnimationProps} transition={{ delay: 0.5 }}>
              <p className="text-2xl text-textSecondary mt-2">
                Web Developer, Creative Coder, Game Maker
              </p>
            </Animated>
            <Animated {...defaultAnimationProps} transition={{ delay: 0.5 }}>
              <p className="text-lg text-textSecondary text-left mt-2">
                Whether it's a slick{" "}
                <span className="font-bold text-textPrimary">website</span> or a
                new <span className="font-bold text-textPrimary">game</span>{" "}
                idea, I'm{" "}
                <span className="font-bold text-textPrimary">
                  always building
                </span>{" "}
                something.
              </p>
            </Animated>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
