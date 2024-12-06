import React from "react";
import Navigation from "../components/Navigation";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex">
      <div className="flex-grow flex flex-col justify-center items-start p-12">
        <h1 className="text-4xl font-bold">Jeenit Sharma</h1>
        <p className="text-lg text-gray-600 mt-2">Web Developer, Creative Coder, Game Maker</p>
      </div>
      <div className="w-1/4 flex items-center">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
