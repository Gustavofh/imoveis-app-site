import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
// import Reports from './pages/Reports';
// import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/table' component={Table} />
          {/* <Route path='/products' component={Products} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;