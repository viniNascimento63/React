import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StockPage from './pages/StockPage';
import SignupPage from './pages/SignPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignupPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Routes>
    </div>
  );
}

export default App;
