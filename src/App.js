import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import Support from './pages/Support';
import Favorites from './pages/Favorites';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/table' element={<Table />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/support' element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;