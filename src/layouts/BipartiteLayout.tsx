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
    <div className="container mx-auto flex md:flex-row flex-col">
      {/* Left Half (Main Content) */}
      <div
        className={`md:w-4/5 flex flex-col md:justify-center items-start pl-2 pr-2 
        md:pr-0 w-full justify-start pt-8 md:pt-0 text-left h-[calc(86.5%)] md:h-full md:mb-0 overflow-hidden scrollbar-none`}
      >
        {leftContent}
      </div>

      {/* Right Half (Bottom Navigation on smaller screens) */}
      <div className="md:w-1/3 absolute bottom-0 md:relative md:top-0 w-full md:flex md:justify-start md:items-center">
        <div className="sticky bottom-0 left-0 w-full md:static md:bg-transparent p-4">
          <div className="flex justify-evenly md:justify-start">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BipartiteLayout;
