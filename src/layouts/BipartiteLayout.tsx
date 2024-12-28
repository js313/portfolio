import React from "react";

interface BipartiteLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const BipartiteLayout: React.FC<BipartiteLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="container mx-auto h-screen flex md:flex-row flex-col">
      {/* Left Half (Main Content) */}
      <div
        className={`md:w-4/5 flex-grow flex flex-col md:justify-center items-start pl-2 pr-2 
        md:pr-0 w-full justify-start pt-8 md:pt-0 text-left pb-16 md:pb-0 h-[calc(100vh-4rem)] md:h-auto
        overflow-auto scrollbar-none`}
      >
        {leftContent}
      </div>

      {/* Right Half (Bottom Navigation on smaller screens) */}
      <div className="md:w-1/3 md:relative md:top-0 w-full md:flex md:justify-start md:items-center">
        <div className="fixed bottom-0 left-0 w-full md:static bg-background md:bg-transparent p-4">
          <div className="flex justify-evenly md:justify-start">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BipartiteLayout;
