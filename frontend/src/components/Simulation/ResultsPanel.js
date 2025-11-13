import React from 'react';
import EquityCurve from './EquityCurve';
import Metrics from './Metrics';
import TradeLog from './TradeLog';

const ResultsPanel = ({ trades, tradeFilter, setTradeFilter }) => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <EquityCurve />
      <Metrics />
      <TradeLog trades={trades} tradeFilter={tradeFilter} setTradeFilter={setTradeFilter} />
    </div>
  );
};

export default ResultsPanel;
