import React, { useState } from 'react';
import { Filter } from './components/Filters';
import { FinalTable } from './components/Table';
import './App.css';
import HamburgerMenu from './components/DropdownMenu';

const App = () => {
  const [filter, setFilter] = useState({ state: '', city: '', neighborhood: '' });

  return (
    <div>
      <div>
        <header className="App-header">
          <h1 className="App-title">Bem vindo ao seu auxiliar de leilões!</h1>
        </header>
        <HamburgerMenu />
        <Filter onFilter={setFilter} />
        <FinalTable filter={filter} />
      </div>
    </div>
  );
};

export default App;