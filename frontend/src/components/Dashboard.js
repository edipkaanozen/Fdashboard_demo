import React, { useState, useEffect } from 'react';
import KeyMetrics from './KeyMetrics';
import TradingDashboard from './TradingDashboard';

const Dashboard = () => {
  const [keyMetrics, setKeyMetrics] = useState(null);
  const [trades, setTrades] = useState([]);
  const [upcomingExpirations, setUpcomingExpirations] = useState([]);

  useEffect(() => {
    fetch('/api/key-metrics/')
      .then(response => response.json())
      .then(data => setKeyMetrics(data[0]));

    fetch('/api/trades/')
      .then(response => response.json())
      .then(data => setTrades(data));

    fetch('/api/upcoming-expirations/')
      .then(response => response.json())
      .then(data => setUpcomingExpirations(data));
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0f1c24] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <KeyMetrics keyMetrics={keyMetrics} />
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <TradingDashboard trades={trades} upcomingExpirations={upcomingExpirations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
