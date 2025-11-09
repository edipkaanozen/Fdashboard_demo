import React from 'react';
import EquityCurve from './EquityCurve';
import RecentTrades from './RecentTrades';
import UpcomingExpirations from './UpcomingExpirations';
import GreeksMonitor from './GreeksMonitor';

const TradingDashboard = ({ trades, upcomingExpirations }) => {
  return (
    <div>
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Trading Dashboard</h2>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <EquityCurve />
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Trades &amp; Positions</h2>
      <div className="px-4 py-3 @container">
        <RecentTrades trades={trades} />
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Expirations</h2>
      <div className="px-4 py-3 @container">
        <UpcomingExpirations upcomingExpirations={upcomingExpirations} />
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Greeks Monitor</h2>
      <div className="p-4">
        <GreeksMonitor />
      </div>
    </div>
  );
};

export default TradingDashboard;
