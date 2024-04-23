import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StockPage from './pages/StockPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Routes>
    </div>
  );
}

export default App;
