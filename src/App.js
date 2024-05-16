import React, { useState } from 'react';
import { Filter } from './components/Filters';
import { FinalTable } from './components/Table';

const App = () => {
  const [filter, setFilter] = useState({ state: '', city: '', neighborhood: '' });

  return (
    <div>
      <Filter onFilter={setFilter} />
      <FinalTable filter={filter} />
    </div>
  );
};

export default App;