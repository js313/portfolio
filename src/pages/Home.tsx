import React from "react";
import Navigation from "components/Navigation";
import AnimatedDiv from "components/AnimatedDiv";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto h-screen flex">
      <div className="flex-grow flex flex-col justify-center items-start p-12">
        <AnimatedDiv>
          <h1 className="text-4xl text-textSecondary">
            Hey, I'm <span className="font-bold text-textPrimary">Jeenit.</span>
          </h1>
        </AnimatedDiv>
        <AnimatedDiv delay={0.5}>
          <p className="text-2xl text-textSecondary mt-2">
            Web Developer, Creative Coder, Game Maker
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay={0.75}>
          <p className="text-lg text-textSecondary text-gray-600 mt-2">
            Whether it's a slick{" "}
            <span className="font-bold text-textPrimary">website</span> or a new{" "}
            <span className="font-bold text-textPrimary">game</span> idea, I'm{" "}
            <span className="font-bold text-textPrimary">always building</span>{" "}
            something.
          </p>
        </AnimatedDiv>
      </div>
      <div className="w-1/4 flex items-center">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
