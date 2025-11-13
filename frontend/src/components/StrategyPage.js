import React from 'react';
import StrategyLibrary from './StrategyLibrary';
import StrategyBuilder from './StrategyBuilder';

const StrategyPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#101518] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <StrategyLibrary />
          <StrategyBuilder />
        </div>
      </div>
    </div>
  );
};

export default StrategyPage;
