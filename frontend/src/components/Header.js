import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#0066ff] px-10 py-3 bg-[#0066ff]">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TradeVision</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to="/">Dashboard</Link>
          <Link className="text-white text-sm font-medium leading-normal" to="/strategies">Strategies</Link>
          <Link className="text-white text-sm font-medium leading-normal" to="/backtest">Backtests</Link>
          <button type="button" className="text-white text-sm font-medium leading-normal">Live Trading</button>
          <button type="button" className="text-white text-sm font-medium leading-normal">Community</button>
        </div>
        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#27333a] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
              ></path>
            </svg>
          </div>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAic98FujlE2Ezw9ZwraQExs3I0wkNowd6OADhXtwrJR-KhabWaoNWh-bhQAkieTyoZv6Hf0TRng4NV84RDCYtjJNhA8TTzppRihP3mlzy48UmDOcCUyOawSL14eqBR8TS2e0EdnvaF0ua5yoteEmexsDxNHQua-KGhajKFQ9tgCmNHQ-rpL00U7DS30BDQ3DsOFTdJ3tYHZqIcbGCooLq0aGMk0QZqDfH3slR6tdFsOGlqbcrJXhnvVcxgRTMp70ym_biATbu8qNo")'}}
        ></div>
      </div>
    </header>
  );
};

export default Header;
