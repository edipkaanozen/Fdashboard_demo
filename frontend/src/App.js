import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StrategyPage from './components/StrategyPage';
import Header from './components/Header';
import BacktestResults from './components/BacktestResults'; // This will be created in the next step

function App() {
  return (
    <Router>
function App() {
  return (
    <Router>
      <div className="bg-[#101518] min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<StrategyPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/backtest" element={<BacktestResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

