import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Simulation from './components/Simulation';
import BacktestResults from './components/BacktestResults';
import Strategies from './components/Strategies';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/simulation">Simulation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/backtest" element={<BacktestResults />} />
          <Route path="/strategies" element={<Strategies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

