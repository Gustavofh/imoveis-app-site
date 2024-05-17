import React, { useState } from 'react';
import { Filter } from './components/Filters';
import { FinalTable } from './components/Table';
import './App.css';
import { Testando } from './components/Favorites';

const App = () => {
  const [filter, setFilter] = useState({ state: '', city: '', neighborhood: '' });

  return (
    <div>
      <div>
        <Testando />
      </div>
      <div>
        <Filter onFilter={setFilter} />
        <FinalTable filter={filter} />
      </div>
    </div>
  );
};

export default App;