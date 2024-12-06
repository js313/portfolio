import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Link to="/projects" className="text-blue-500 hover:underline">
        Projects
      </Link>
      <Link to="/contact" className="text-blue-500 hover:underline">
        Contact
      </Link>
      <Link to="/about" className="text-blue-500 hover:underline">
        About
      </Link>
    </div>
  );
};

export default Navigation;
