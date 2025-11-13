import React, { useState, useEffect } from 'react';
import SettingsPanel from './Simulation/SettingsPanel';
import ResultsPanel from './Simulation/ResultsPanel';

const initialTrades = [
  { date: '2023-01-15', type: 'Entry', symbol: 'XYZ', quantity: 100, price: 150.25, pl: -250, mae_mfe: '-$500/$1000' },
  { date: '2023-01-20', type: 'Exit', symbol: 'XYZ', quantity: 100, price: 152.75, pl: 250, mae_mfe: '-$500/$1000' },
  { date: '2023-02-05', type: 'Entry', symbol: 'ABC', quantity: 50, price: 200.50, pl: -100, mae_mfe: '-$200/$500' },
  { date: '2023-02-10', type: 'Exit', symbol: 'ABC', quantity: 50, price: 202.50, pl: 100, mae_mfe: '-$200/$500' },
  { date: '2023-03-01', type: 'Entry', symbol: 'DEF', quantity: 200, price: 75.10, pl: -400, mae_mfe: '-$800/$1500' },
];

const Simulation = () => {
  const [settings, setSettings] = useState({
    symbol: '',
    dateRange: '',
    barFrequency: 'daily',
    transactionCosts: '',
    slippage: '',
    leverage: '',
  });

  const [trades] = useState(initialTrades);
  const [filteredTrades, setFilteredTrades] = useState(initialTrades);
  const [tradeFilter, setTradeFilter] = useState('All');

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (tradeFilter === 'All') {
      setFilteredTrades(trades);
    } else {
      setFilteredTrades(trades.filter(trade => trade.type === tradeFilter));
    }
  }, [tradeFilter, trades]);


  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#101518] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <SettingsPanel settings={settings} onChange={handleSettingsChange} />
          <ResultsPanel trades={filteredTrades} tradeFilter={tradeFilter} setTradeFilter={setTradeFilter} />
        </div>
      </div>
    </div>
  );
};

export default Simulation;
