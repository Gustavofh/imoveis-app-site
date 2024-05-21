import React, { useState } from 'react';
import { Filter } from './components/Filters';
import { FinalTable } from './components/Table';
import './templatesCss/App.css';
import DropdownMenu from './components/DropdownMenu';
import { NavBar } from './components/Navbar_withProSidebar';

const App = () => {
  const [filter, setFilter] = useState({ state: '', city: '', neighborhood: '' });

  return (
    <div>
      <div>
        <header className="App-header">
          <h1 className="App-title">Encontre seu imóvel<br/>na Bloco.</h1>
        </header>
        <NavBar />
      </div>
    </div>
  );
};

export default App;