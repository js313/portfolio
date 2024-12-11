import React from "react";

interface BipartiteLayoutProps {
  leftContent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const BipartiteLayout: React.FC<BipartiteLayoutProps> = ({
  leftContent,
  rightComponent,
}) => {
  return (
    <div className="container mx-auto h-screen flex">
      {/* Left Half */}
      <div className="flex-grow flex flex-col justify-center items-start">
        {leftContent}
      </div>

      {/* Right Half */}
      <div className="w-1/4 flex items-center">{rightComponent}</div>
    </div>
  );
};

export default BipartiteLayout;
