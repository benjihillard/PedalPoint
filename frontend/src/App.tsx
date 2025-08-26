import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Rides from './pages/Rides';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rides" element={<Rides />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
