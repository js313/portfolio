import React from "react";

interface BipartiteLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const BipartiteLayout: React.FC<BipartiteLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  // md:... is for medium(768 px) screens or larger, so classes that should be on mobile resolution
  // should not be put in md
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row">
      {/* Left Half (Main Content on smaller screens) */}
      <div className="md:w-5/6 flex-grow flex flex-col justify-center items-start md:px-0">
        {leftContent}
      </div>

      {/* Right Half (Bottom Navigation on smaller screens) */}
      <div className="md:w-1/6 flex-grow flex items-center p-4 md:relative md:sticky md:top-0 md:p-0">
        {rightContent}
      </div>
    </div>
  );
};

export default BipartiteLayout;
