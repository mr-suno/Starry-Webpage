import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Games';
import Premium from './pages/Premium';
import Script from './pages/Script';
import Contributors from './pages/Contributors';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="App min-h-screen relative">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-10">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="bg-gray-300 h-full w-full"></div>
        ))}
      </div>
      
      <nav className="relative z-10 flex justify-between items-center p-4 bg-white shadow-lg">
        <span className="text-xl font-bold text-black">Starry</span>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-12">
          <a href="/#games" className="button"><b>Free Games</b></a>
          <a href="/#premium" className="button"><i><b>Premium</b></i></a>
          <a href="/#script" className="button"><b>Script</b></a>
          <a href="/#contributors" className="button"><b>Contributors</b></a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Home />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/script" element={<Script />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;